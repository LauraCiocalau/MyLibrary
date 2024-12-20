import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyResetPasswordRequest } from '../models/my-reset-password-request.model'; // Ensure this path is correct
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private apiUrl = environment.apiUrl + '/ResetPassword';
  
  constructor(private http: HttpClient) {}

  // Using MyResetPasswordRequest for type safety
  resetPassword(request: MyResetPasswordRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password`, request);
  }
}