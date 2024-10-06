import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Genre, Status } from '../../models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-details-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-details-modal.component.html',
  styleUrls: ['./book-details-modal.component.css']
})
export class BookDetailsModalComponent {
  @Input() book: any;  // Input to receive book details
  router = inject(Router);

  // Method to map genre (which could be an enum index) to its string value
  getGenre(genre: Genre | number): string {
    if (typeof genre === 'number') {
      return Genre[genre] || 'Unknown'; // Directly use the enum to get string value
    }
    return genre; // Assuming genre is already a string if not a number
  }

  // Method to map status (which could be an enum index) to its string value
  getStatusString(status: Status | number): string {
    if (typeof status === 'number') {
      return Status[status] || 'Unknown'; // Directly use the enum to get string value
    }
    return status; // Assuming status is already a string if not a number
  }

  edit() {
    if (this.book && this.book.id) {
      // Navigate to the edit page for the specific book by its ID
      this.router.navigate([`/edit-book/${this.book.id}`]);
    } else {
      console.error('Book ID is missing.');
    }
  }
}
