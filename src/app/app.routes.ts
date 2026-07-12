import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { AdopcionComponent } from './pages/adopcion/adopcion.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent },

  { path: 'mascotas', component: MascotasComponent },

  { path: 'adopcion', component: AdopcionComponent },

  { path: 'about', component: AboutComponent },

  { path: '**', redirectTo: 'login' }
];