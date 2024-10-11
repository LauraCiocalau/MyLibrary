import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router, RouterOutlet, ActivatedRoute, RouterModule } from '@angular/router';
import { RegisterRequest } from '../../models/register.model';
import { LoginRequest } from '../../models/login.model';
import { HomeService } from '../../services/home.service';
import { CarouselComponent } from '../carousel/carousel.component';
import { BackgroundImageComponent } from '../background-image/background-image.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet, RouterModule, CarouselComponent, BackgroundImageComponent]
})
export class LandingPageComponent implements AfterViewInit {

  loginSubmitted = false;
  registerSubmitted = false;
  loginForm: FormGroup;
  registerForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private homeService: HomeService, // Adaugă HomeService aici
    private route: ActivatedRoute 
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false],
    });
  
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      userName: ['', [Validators.required]]
    }, { validator: this.passwordsMatchValidator });
  }

  login(): void {
    this.loginSubmitted = true;
    if (this.loginForm.valid) {
      const loginModel: LoginRequest = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        rememberMe: this.loginForm.value.rememberMe
      };
  
      this.authService.onLogin(loginModel).subscribe(
        response => {
          console.log('Login successful', response);
          this.errorMessage = null;
          this.router.navigateByUrl('home-page');
        },
        error => {
          this.errorMessage = 'Invalid email or password';
        }
      );
    }
  }

  register(): void {
  this.registerSubmitted = true;
  if (this.registerForm.valid) {
      const registerModel: RegisterRequest = {
          email: this.registerForm.value.email,
          password: this.registerForm.value.password,
          confirmPassword: this.registerForm.value.confirmPassword,
          userName: this.registerForm.value.userName
      };

      this.authService.register(registerModel).subscribe(
        response => {
            console.log('Registration successful', response);
            this.successMessage = `Account created successfully!<br> You can log in now.`;
            // Add a delay before navigating to home page to show the message
            setTimeout(() => {
                this.router.navigateByUrl('home-page');
            }, 5000); // Adjust the delay time as needed
        },
        error => {
            console.error('Registration error:', error);
            this.errorMessage = error.error?.message || 'Registration failed. Please try again.';
        }
    );
  }
}

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  navigateToForgotPassword(event: Event): void {
    console.log('Navigating to forgot password');
    this.router.navigateByUrl('forgot-password');
  }

  ngAfterViewInit(): void {
    const signInBtnLink = document.querySelector('.signInBtn-link');
    const signUpBtnLink = document.querySelector('.signUpBtn-link');
    const wrapper = document.querySelector('.wrapper');

    signUpBtnLink?.addEventListener('click', () => {
      wrapper?.classList.toggle('active');
    });

    signInBtnLink?.addEventListener('click', () => {
      wrapper?.classList.toggle('active');
    });
  }

}