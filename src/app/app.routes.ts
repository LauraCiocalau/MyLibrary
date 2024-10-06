import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderComponent } from './pages/header/header.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password/:token',
    component: ResetPasswordComponent
  },
  {
    path: '',
    component: HeaderComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: 'home-page',
        component: HomePageComponent
      },
      {
        path: '',
        outlet: 'header',
        component: HeaderComponent // Componenta pentru outlet-ul numit "header"
      },
      { path: 'edit-book/:id', 
        component: EditBookComponent }
    ]
  },
  
];
