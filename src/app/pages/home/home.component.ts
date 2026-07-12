import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  totalMascotas = 0;
  disponibles = 0;
  adoptadas = 0;
  solicitudes = 0;

  ngOnInit(): void {

    const mascotas = JSON.parse(localStorage.getItem('mascotas') || '[]');
    const solicitudes = JSON.parse(localStorage.getItem('solicitudes') || '[]');

    this.totalMascotas = mascotas.length;

    this.disponibles = mascotas.filter(
      (m: any) => m.estado === 'Disponible'
    ).length;

    this.adoptadas = mascotas.filter(
      (m: any) => m.estado === 'Adoptado'
    ).length;

    this.solicitudes = solicitudes.length;

  }

}