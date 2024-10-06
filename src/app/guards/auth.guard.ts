import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): Observable<boolean> {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');

        if (token) {
            // Dacă există un token, îl validăm pe server
            return this.authService.validateToken(token).pipe(
                map(response => {
                    if (response.valid) {
                        return true;
                    } else {
                        this.router.navigate(['/landing-page']);
                        return false;
                    }
                }),
                catchError((error) => {
                    this.router.navigate(['/landing-page']);
                    return of(false);
                })
            );
        } else {
            // Dacă nu există token, redirecționează direct
            this.router.navigate(['/landing-page']);
            return of(false);
        }
    }
}