import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoginRequest } from '../models/login.model';
import { RegisterRequest } from '../models/register.model';
import { UserProfile } from '../models/user.model';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  public getToken(): string | null {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  getUserId(): Observable<{ userId: string }> {
    return this.http.get<{ userId: string }>(`${this.baseUrl}/User/GetUserId`, { headers: this.getAuthHeaders() }); // Ensure headers are used
  }

  getUserDetails(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.baseUrl}/User/details`, { headers: this.getAuthHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  // User login
  onLogin(request: LoginRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Account/login`, request, { headers: this.headers }).pipe(
      tap(response => {
        if (response.token) {
          const storage = request.rememberMe ? localStorage : sessionStorage;
          storage.setItem('token', response.token); // Store token based on rememberMe
        }
      }),
      catchError(this.handleError)
    );
  }

  // User registration
  register(request: RegisterRequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Account/register`, request, { headers: this.headers }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token); // Store token
        }
      }),
      catchError(this.handleError)
    );
  }

  // Fetching user's books
  getMyBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Account/MyBooks`, { headers: this.getAuthHeaders() })
      .pipe(catchError(this.handleError));
  }

  // Validating token
  validateToken(token: string): Observable<{ valid: boolean }> {
    const body = { token };
    return this.http.post<{ valid: boolean }>(`${this.baseUrl}/Account/validate-token`, body, { headers: this.getAuthHeaders() })
      .pipe(catchError(this.handleError));
  }

  // Password reset
  forgotPassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/ResetPassword/forgot-password`, { email }, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // Deleting user account
  deleteUser(): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/User/delete`, { headers: this.getAuthHeaders() })
      .pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Something went wrong; please try again later.';
    if (error.error instanceof ErrorEvent) {
      console.error('A client-side error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
      switch (error.status) {
        case 400:
          errorMessage = 'Bad Request: Please check your input.';
          break;
        case 401:
          errorMessage = 'Unauthorized: Invalid credentials or session expired.';
          this.clearToken(); // Clear token on 401
          break;
        case 500:
          errorMessage = 'Server error: Please try again later.';
          break;
        default:
          errorMessage = `Unexpected error: ${error.message}`;
          break;
      }
    }
    return throwError(() => new Error(errorMessage));
  }

  // Clear token
  private clearToken(): void {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    // Optionally redirect to login page
  }

  // Get authorization headers
  private getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return this.headers.set('Authorization', token ? `Bearer ${token}` : '');
  }
}