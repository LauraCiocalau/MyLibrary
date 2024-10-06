import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyResetPasswordRequest } from '../models/my-reset-password-request.model'; // Ensure this path is correct

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private apiUrl = 'https://mylibrary20240927025704.azurewebsites.net/api/ResetPassword'; // Ensure the endpoint matches your backend

  constructor(private http: HttpClient) {}

  // Using MyResetPasswordRequest for type safety
  resetPassword(request: MyResetPasswordRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password`, request);
  }
}