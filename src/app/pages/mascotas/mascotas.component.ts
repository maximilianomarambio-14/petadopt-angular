import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent
  ],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent {

  nombre = '';
  edad: number | null = null;
  tipo = '';
  estado = '';

  mascotas: any[] = [];

  ngOnInit(): void {

    const datos = localStorage.getItem('mascotas');

    if (datos) {

      this.mascotas = JSON.parse(datos);

    }

  }

  guardarMascota() {

    if (
      this.nombre.trim() === '' ||
      this.edad === null ||
      this.tipo === '' ||
      this.estado === ''
    ) {

      alert('Complete todos los campos.');

      return;

    }

    const mascota = {

      id: Date.now(),

      nombre: this.nombre,

      edad: this.edad,

      tipo: this.tipo,

      estado: this.estado

    };

    this.mascotas.push(mascota);

    localStorage.setItem(
      'mascotas',
      JSON.stringify(this.mascotas)
    );

    this.nombre = '';
    this.edad = null;
    this.tipo = '';
    this.estado = '';

  }

  eliminar(id:number){

    this.mascotas = this.mascotas.filter(
      mascota => mascota.id !== id
    );

    localStorage.setItem(
      'mascotas',
      JSON.stringify(this.mascotas)
    );

  }

}