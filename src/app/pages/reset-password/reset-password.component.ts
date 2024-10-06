import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordService } from '../../services/password.service';
import { MyResetPasswordRequest } from '../../models/my-reset-password-request.model'; // Adjust the path as necessary
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup; // Declare the property
  token: string | null = null; // Initialize the token with null
  messageSend: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private passwordService: PasswordService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.token = params['token'] ? decodeURIComponent(params['token']) : null;
    });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  async onSubmit(): Promise<void> {
    if (this.resetPasswordForm.valid) {
      const request: MyResetPasswordRequest = {
        email: this.resetPasswordForm.value.email,
        token: this.token as string,
        newPassword: this.resetPasswordForm.value.password,
        confirmPassword: this.resetPasswordForm.value.confirmPassword
      };

      try {
        const response = await firstValueFrom(this.passwordService.resetPassword(request));
        this.messageSend = 'Password reset successful';
        setTimeout(() => this.router.navigate(['/landing-page']), 3000);
      } catch (error) {
        if (error instanceof HttpErrorResponse) {
          if (error.error.Errors) {
            this.errorMessage = error.error.Errors.join(', ');
          } else {
            this.errorMessage = error.error || 'Error resetting password.';
          }
        } else {
          this.errorMessage = 'Unexpected error occurred.';
        }
      }
    }
  }
}