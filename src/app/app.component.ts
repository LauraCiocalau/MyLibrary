import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  NguCarousel,
  NguCarouselDefDirective,
  NguCarouselNextDirective,
  NguCarouselPrevDirective,
  NguItemComponent,
  NguTileComponent
} from '@ngu/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    FormsModule,
    NguCarousel, 
  NguTileComponent,   
  NguCarousel,
  NguCarouselDefDirective,
  NguCarouselNextDirective,
  NguCarouselPrevDirective,
  NguItemComponent
  ]
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      this.router.navigateByUrl('home-page');
    }

  }
}
