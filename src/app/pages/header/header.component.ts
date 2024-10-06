import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProfileModalComponent } from '../../modals/profile-modal/profile-modal.component';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AboutModalComponent } from '../../modals/about-modal/about-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userId: string | null = null; // Initialize userId

  router = inject(Router);
  constructor(private authService: AuthService, private dialog: MatDialog, private http: HttpClient) {}

  ngOnInit(): void {
    this.authService.getUserId().subscribe({
      next: (data) => {
        this.userId = data.userId; // Set userId from API response
        console.log('User ID:', this.userId);
      },
      error: (err) => {
        if (err.status === 404) {
          console.log('User not found, redirecting to landing page...');
          this.router.navigate(['/landing-page']); // Redirect to landing page
        } else {
          console.error('Error fetching user ID:', err);
        }
      }
    });
  }

  onLogout(): void {
    console.log('Logging out...');
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    console.log('Token removed. Redirecting to login page.');
    this.router.navigateByUrl("/landing-page");
  }

  openProfileModal() {
    this.openUserModal(ProfileModalComponent);
  }

  openAboutModal() {
    this.openUserModal(AboutModalComponent);
  }

  private openUserModal(modalComponent: any) {
    if (!this.userId) {
      console.error('User ID is undefined'); // Error handling if userId is not set
      return;
    }

    this.authService.getUserDetails().subscribe({
      next: (userData) => {
        this.dialog.open(modalComponent, {
          data: { userName: userData.userName, email: userData.email }
        });
      },
      error: (err) => {
        console.error('Error fetching user details:', err);
        // Consider adding user feedback here, e.g., a notification.
      }
    });
  }
}