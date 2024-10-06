import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseHrefService {
  setBaseHref(path: string): void {
    const baseElement = document.querySelector('base') as HTMLBaseElement;
    if (baseElement) {
      baseElement.href = path;
    } else {
      const base = document.createElement('base');
      base.href = path;
      document.head.appendChild(base);
    }
  }
}
