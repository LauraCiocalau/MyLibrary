import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from './../../services/auth.service'; // Ajustează calea dacă este necesar
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  router = inject(Router);
  forgotPasswordForm: FormGroup;
  errorMessage: string | null = null; 
  messageSend: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      this.authService.forgotPassword(this.forgotPasswordForm.value.email)
        .subscribe(
          response => {
            console.log('Password reset link sent', response);
            this.errorMessage = null;
            this.messageSend = `We've just sent you an email with a link to update your password.`;
          },
          error => {
            console.error('Error sending password reset link', error);
            this.errorMessage = `Error: ${error.message || 'Unknown error'}`;
          }
        );
    } else {
      this.errorMessage = 'Please enter a valid email address';
    }
  }

  backToLogin(event: Event): void {
    event.preventDefault();
    this.router.navigateByUrl("/landing-page");
  }
}
