import { Component, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent {
  router = inject(Router);
  
  constructor(
    public dialogRef: MatDialogRef<ProfileModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService
  ) {}

  deleteUser() {
    this.authService.deleteUser().subscribe({
        next: () => {
            console.log('Account deleted successfully.');
            this.clearToken(); // Clear tokens
            this.dialogRef.close(); // Close the modal
            this.router.navigate(['/landing-page']); // Then redirect to landing page
        },
        error: (err) => {
            if (err.status === 401) {
                console.error('Unauthorized: User not found, redirecting to login.');
                this.clearToken(); // Clear tokens
                this.dialogRef.close(); // Close the modal before redirection
                this.router.navigate(['/landing-page']); // Redirect to landing page
            } else {
                console.error('Error deleting account:', err);
            }
        }
    });
}

private clearToken(): void {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
}
}