import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http'; // Ensure HTTP_INTERCEPTORS is imported
import { routes } from './app.routes'; // Ensure this file contains your routing configuration
import { AuthInterceptor } from './auth.interceptor'; // Adjust the import path accordingly
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), // HTTP client configuration
    provideZoneChangeDetection({ eventCoalescing: true }), // Zone change detection configuration
    provideRouter(routes), // Router configuration
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  
};
