import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model'; // Importă modelul Book
import { BookUpdate } from '../models/book-update';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://mylibrary20240927025704.azurewebsites.net/api/Library'; // URL-ul API-ului .NET

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}`, book);
  }

  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateBook(bookId: string, bookData: BookUpdate, options?: { headers?: HttpHeaders }): Observable<any> {
    return this.http.put(`${this.apiUrl}/books/${bookId}`, bookData, options);
}
}