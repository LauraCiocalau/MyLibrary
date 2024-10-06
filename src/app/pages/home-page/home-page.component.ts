import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { catchError, map, takeUntil, finalize, tap } from 'rxjs/operators';
import { HomeService } from '../../services/home.service';
import { Router, RouterOutlet } from '@angular/router';
import { Genre, Status } from '../../models/book.model';
import { AuthService } from '../../services/auth.service';
import { BookDetailsModalComponent } from "../../modals/book-details-modal/book-details-modal.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterOutlet, BookDetailsModalComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit, OnDestroy {
  booksForm!: FormGroup;
  books$: Observable<any[]> = of([]);
  filteredBooks$: Observable<any[]> = of([]);

  isAccordionOpen = false; // Proprietate pentru controlul acordeonului
  searchTerm: string = '';
  toggleAccordion(): void {
    this.isAccordionOpen = !this.isAccordionOpen; // Schimbă starea
  }
  searchTitle: string = '';
  searchAuthor: string = '';
  searchPublishedYear: string = '';
  searchCategory: string = '';
  searchStatus: string = '';
  
  totalBooksCount: number = 0;
  bookCount: number = 0;
  statusOptions = Status;
  isLoading = false;
  router = inject(Router);

  genres: string[] = Object.keys(Genre).filter(key => isNaN(Number(key)));
  statuses: string[] = Object.keys(Status).filter(key => isNaN(Number(key)));
  private searchTermSubject = new BehaviorSubject<string>('');
  private unsubscribe$ = new Subject<void>(); // For managing unsubscriptions
  showForm = false; // Added to control form visibility

  constructor(private fb: FormBuilder, private homeService: HomeService, private authService: AuthService,   private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('Component initialized');
    const token = this.authService.getToken();
  if (!token) {
    this.router.navigateByUrl('/landing-page');
  } else {
    this.authService.validateToken(token).subscribe(response => {
      if (!response.valid) {
        this.router.navigateByUrl('/landing-page');
      }
    });
    this.filteredBooks$ = this.homeService.getBooks();
  }

    this.booksForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      isbn: [''],
      publishedYear: [''],
      numberOfPages: [''],
      image: [''],
      genre: [Genre.Romance, Validators.required],
      status: [this.statusOptions.Unread, Validators.required]
    });

    this.books$ = this.homeService.getBooks().pipe(
      tap(books => {
        this.totalBooksCount = books.length; // Update total count
        this.bookCount = books.length; // Set initial book count
      }),
      takeUntil(this.unsubscribe$)
    );

    this.filteredBooks$ = combineLatest([this.books$, this.searchTermSubject.asObservable()]).pipe(
      map(([books, searchTerm]) => {
        const filteredBooks = searchTerm.trim()
          ? books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
          : books;
    
        // Actualizează numărul de cărți
        this.bookCount = filteredBooks.length;
    
        return filteredBooks;
      })
    );
  }

  toggleForm(): void {
    this.showForm = !this.showForm; // Toggle form visibility
  }

  onFormSubmit(): void {
    if (this.booksForm.invalid) {
      this.showFormValidationErrors();
      return;
    }

    this.isLoading = true; // Start loading spinner
    const formData = new FormData();
    Object.keys(this.booksForm.value).forEach(key => {
      formData.append(key, this.booksForm.get(key)?.value);
    });

    const imageControl = this.booksForm.get('image');
    if (imageControl?.value) {
      formData.append('image', imageControl.value);
    } else {
      const defaultImagePath = '/img/default.jpg';
    formData.append('image', defaultImagePath);
    }

    this.homeService.addBook(formData)
      .pipe(
        catchError(error => {
          console.error('Error Details:', error);
          alert(`Something went wrong: ${error.message}`);
          return throwError(() => new Error(`Something went wrong: ${error.message}`));
        }),
        finalize(() => {
          this.isLoading = false; // Stop loading spinner
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe({
        next: (event) => {
          if (event.type === HttpEventType.Response) {
            console.log('Success:', event.body);
            this.books$ = this.homeService.getBooks().pipe(takeUntil(this.unsubscribe$));
            this.booksForm.reset();
            this.toggleForm(); // Hide form after submission
          }
        },
        error: (err) => {
          console.error('Error:', err);
          alert('An error occurred while submitting the form. Please try again later.');
        }
      });
  }

  previewImage: string | ArrayBuffer | null = null;

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (allowedTypes.includes(file.type) && file.size <= 2 * 1024 * 1024) { // 2 MB limit
        this.booksForm.patchValue({ image: file });
        const reader = new FileReader();
        reader.onload = () => {
          this.previewImage = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select a valid image file (JPEG, PNG, GIF) under 2MB.');
      }
    }
  }

  onSearchTermChange() {
    const searchTitle = this.searchTitle.toLowerCase();
    const searchAuthor = this.searchAuthor.toLowerCase();
    const searchYear = this.searchPublishedYear;
    const searchCategory = this.searchCategory;
    const searchStatus = this.searchStatus; // Keep searchStatus as is without converting to lowercase
  
    console.log('Searching for:', { searchTitle, searchAuthor, searchYear, searchCategory, searchStatus });
  
    this.filteredBooks$ = this.books$.pipe(
      map(books => {
        const filteredBooks = books.filter(book => {
          const matchesTitle = !searchTitle || book.title.toLowerCase().includes(searchTitle);
          const matchesAuthor = !searchAuthor || book.author.toLowerCase().includes(searchAuthor);
          const matchesYear = !searchYear || book.publishedYear == searchYear;
          const matchesCategory = !searchCategory || Genre[book.genre] === searchCategory;
          const matchesStatus = !searchStatus || this.statusOptions[book.status] === searchStatus; // Corrected status comparison
  
          console.log('Matching book:', book, {
            matchesTitle,
            matchesAuthor,
            matchesYear,
            matchesCategory,
            matchesStatus
          });
  
          return matchesTitle && matchesAuthor && matchesYear && matchesCategory && matchesStatus;
        });
  
        this.bookCount = filteredBooks.length;
        return filteredBooks;
      })
    );
  }

 
  onDelete(id: number): void {
    if (!confirm('Are you sure you want to delete this book?')) {
      return;
    }

    this.homeService.deleteBook(id)
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          alert('Failed to delete book. Please try again later.');
          return throwError(() => new Error('Failed to delete book'));
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(() => {
        // Refresh the books list after successful deletion
        this.books$ = this.homeService.getBooks().pipe(takeUntil(this.unsubscribe$));
        alert('Book deleted successfully');
      });
  }

  private showFormValidationErrors(): void {
    for (const control in this.booksForm.controls) {
      if (this.booksForm.controls.hasOwnProperty(control)) {
        this.booksForm.controls[control].markAsTouched();
      }
    }
  }

  ngOnDestroy(): void {
    // Complete the unsubscribe$ subject to close all open observables
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  
  selectedBook: any = null;

  openDetails(book: any): void {
    this.selectedBook = book;
  }

  closeModal(): void {
    this.selectedBook = null;
  }

}