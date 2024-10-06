import { Component, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-modal.component.html',
  styleUrls: ['./about-modal.component.css']
})
export class AboutModalComponent {
  router = inject(Router);
  
  constructor(
    public dialogRef: MatDialogRef<AboutModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService
  ) {}
  close(): void {
    this.dialogRef.close(); // Method to close the modal
  }
}
