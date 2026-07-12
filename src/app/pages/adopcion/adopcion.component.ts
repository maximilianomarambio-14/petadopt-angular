import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-adopcion',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent
  ],
  templateUrl: './adopcion.component.html',
  styleUrl: './adopcion.component.css'
})
export class AdopcionComponent {

  nombre = '';
  correo = '';
  mascota = '';
  motivo = '';

  solicitudes: any[] = [];

  mascotas: any[] = [];

  ngOnInit(): void {

    const datos = localStorage.getItem('solicitudes');

    if (datos) {
      this.solicitudes = JSON.parse(datos);
    }

    const mascotasGuardadas = localStorage.getItem('mascotas');

    if (mascotasGuardadas) {
      this.mascotas = JSON.parse(mascotasGuardadas);
    }

  }

  guardarSolicitud() {

    if (
      this.nombre.trim() === '' ||
      this.correo.trim() === '' ||
      this.mascota === '' ||
      this.motivo.trim() === ''
    ) {

      alert('Complete todos los campos.');

      return;

    }

    const solicitud = {

      id: Date.now(),

      nombre: this.nombre,

      correo: this.correo,

      mascota: this.mascota,

      motivo: this.motivo,

      estado: 'Pendiente'

    };

    this.solicitudes.push(solicitud);

    localStorage.setItem(
      'solicitudes',
      JSON.stringify(this.solicitudes)
    );

    this.nombre = '';
    this.correo = '';
    this.mascota = '';
    this.motivo = '';

  }

  eliminar(id:number){

    this.solicitudes = this.solicitudes.filter(
      solicitud => solicitud.id !== id
    );

    localStorage.setItem(
      'solicitudes',
      JSON.stringify(this.solicitudes)
    );

  }

}