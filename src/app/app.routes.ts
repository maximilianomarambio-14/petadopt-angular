import { Routes, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { AdopcionComponent } from './pages/adopcion/adopcion.component';
import { AboutComponent } from './pages/about/about.component';

const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (localStorage.getItem('login') === 'true') {
    return true;
  }

  router.navigate(['/login']);
  return false;
};

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'mascotas', component: MascotasComponent, canActivate: [authGuard] },
  { path: 'adopcion', component: AdopcionComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];