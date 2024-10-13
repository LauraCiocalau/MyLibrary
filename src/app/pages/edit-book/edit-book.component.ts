import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { Genre, Status } from '../../models/book.model';
import { catchError, finalize, takeUntil } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpEventType } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class EditBookComponent implements OnInit {
  @Input() bookId!: string;
  booksForm!: FormGroup;
  genres: string[] = Object.keys(Genre).filter(key => isNaN(Number(key)));
  statuses: string[] = Object.keys(Status).filter(key => isNaN(Number(key)));
  isLoading = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private fb: FormBuilder, private homeService: HomeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.booksForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      isbn: [''],
      publisher: [''],
      publishedYear: [''],
      numberOfPages: [''],
      image: [''],
      genre: ['', Validators.required],
      status: [0, Validators.required]
    });
  
    // Obține ID-ul cărții din parametrii rutei și convertește-l la litere mari
    const bookIdFromRoute = this.route.snapshot.paramMap.get('id') || '';
this.bookId = bookIdFromRoute.toUpperCase();
  
    // Fetch book details
    if (this.bookId) {
      this.homeService.getBookById(this.bookId).subscribe(
        book => {
          console.log('Fetched book:', book);
          this.booksForm.patchValue({
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            publishedYear: book.publishedYear,
            numberOfPages: book.numberOfPages,
            genre: book.genre,
            status: book.status
          });
          console.log('Fetched book genre:', book.genre);
        },
        error => {
          console.error('Error fetching book:', error);
          alert('Could not fetch book details. Please try again later.');
        }
      );
    }
  }

  onFormSubmit(): void {
      console.log('Form submitted');
      if (this.booksForm.invalid) {
          console.log('Form is invalid');
          this.showFormValidationErrors();
          return;
      }
      console.log('Form is valid, preparing data');
    this.isLoading = true;
    const formData = new FormData();
    Object.keys(this.booksForm.value).forEach(key => {
      const value = key === 'genre' ? Genre[this.booksForm.get(key)?.value] : this.booksForm.get(key)?.value;
      formData.append(key, value as string);
    });

    const imageControl = this.booksForm.get('image');
    if (imageControl?.value) {
      formData.append('image', imageControl.value);
    } else {
      const defaultImagePath = '/img/default.jpg';
      formData.append('image', defaultImagePath);
    }

    this.homeService.updateBook(this.bookId, formData)
    .pipe(
      catchError(error => {
        console.error('Error Details:', error);
        if (error.error && error.error.message) {
          alert(`Something went wrong: ${error.error.message}`);
        } else {
          alert(`Something went wrong: ${error.message}`);
        }
        return throwError(() => new Error(`Something went wrong: ${error.message}`));
      }),
      finalize(() => {
        this.isLoading = false;
      }),
      takeUntil(this.unsubscribe$)
    )
    .subscribe({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
            console.log('Update response:', event.body);
            console.log('Navigating to home page...');
            this.router.navigate(['/home-page']);
        } else {
            console.log('Event type:', event.type); // Log other event types if necessary
        }
      },
      error: (err) => {
        console.error('Error:', err);
        alert('An error occurred while submitting the form. Please try again later.');
      }
    });
  }

  showFormValidationErrors(): void {
    for (const control in this.booksForm.controls) {
        if (this.booksForm.controls.hasOwnProperty(control)) {
            const ctrl = this.booksForm.controls[control];
            if (ctrl.invalid) {
                console.log(`Control ${control} is invalid`);
            }
            ctrl.markAsTouched();
        }
    }
}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.booksForm.patchValue({ image: input.files[0] });
    }
  }
}