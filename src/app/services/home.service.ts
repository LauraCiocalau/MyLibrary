import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from '../models/book.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = environment.apiUrl + '/Library';

  constructor(private http: HttpClient) {}

  private getToken(): string | null {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  getBooks(): Observable<Book[]> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Book[]>(this.apiUrl, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  addBook(bookData: FormData): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.apiUrl, bookData, { headers, reportProgress: true, observe: 'events' }).pipe(
      catchError(error => {
        console.error('Error adding book:', error);
        return throwError(() => new Error('Failed to add book'));
      })
    );
  }

  deleteBook(id: number): Observable<void> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers }).pipe(
      catchError(error => {
        console.error('Error deleting book:', error);
        return throwError(() => new Error('Failed to delete book'));
      })
    );
  }

  private handleError(error: any) {
    let errorMessage = 'An error occurred while processing your request.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error ${error.status}: ${error.message}`;
    }
    console.error('API call error:', error);
    return throwError(() => new Error(errorMessage));
  }

  getBookById(bookId: string): Observable<Book> {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token'); // Verifică tokenul
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Adaugă tokenul în antet
    });
    return this.http.get<Book>(`${this.apiUrl}/books/${bookId}`, { headers }).pipe(
      catchError(error => {
        console.error('Error fetching book:', error);
        return throwError(() => new Error('Failed to fetch book details'));
      })
    );
  }

  updateBook(bookId: string, formData: FormData): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.put(`${this.apiUrl}/books/${bookId}`, formData, {
      headers: headers,
      observe: 'events'
    }).pipe(
      catchError(error => {
        console.error('Error updating book:', error);
        return throwError(() => new Error('Failed to update book'));
      })
    );
  }

  searchBooks(title: string, author: string, year: string, category: string): Observable<Book[]> {
    let params = new HttpParams();
    if (title) params = params.append('title', title);
    if (author) params = params.append('author', author);
    if (year) params = params.append('year', year);
    if (category) params = params.append('category', category);
  
    return this.http.get<Book[]>(`${this.apiUrl}/search`, { params });
  }
}