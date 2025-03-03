import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IntialHomeComponent } from '../../intial-home/intial-home.component';
import { ProyectoFormService } from './proyecto-form.service';
import { Proyecto } from '../../interfaces/proyecto.interface';

@Component({
  selector: 'app-proyecto-form',
  standalone: true,
  imports: [IntialHomeComponent, CommonModule, FormsModule],
  templateUrl: './proyecto-form.component.html',
  styleUrl: './proyecto-form.component.css'
})
export class ProyectoFormComponent implements OnInit {
  proyecto: Proyecto = {
    nombre: '',
    fk_fundacion: 0
  };
  proyectos: Proyecto[] = [];
  isLoading: boolean = false;
  error: string | null = null;
  successMessage: string | null = null;

  constructor(private proyectoFormService: ProyectoFormService) { }

  ngOnInit(): void {
    this.getProyectos();
  }

  getProyectos(): void {
    this.isLoading = true;
    this.error = null;
    this.proyectoFormService.getProyectos().subscribe(
      (data) => {
        console.log('Datos recibidos en el componente:', data);
        this.proyectos = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error completo:', error);
        this.error = `Error al cargar los proyectos: ${this.getErrorMessage(error)}`;
        this.isLoading = false;
      }
    );
  }

  private getErrorMessage(error: any): string {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      return `Error: ${error.error.message}`;
    } else if (error.status) {
      // El servidor respondió con un código de error
      return `Error ${error.status}: ${error.error.message || error.statusText}`;
    } else {
      // Algo más causó el error
      return 'Error desconocido al cargar los proyectos';
    }
  }

  onSubmit(): void {
    this.isLoading = true;
    this.error = null;
    this.successMessage = null;
    this.proyectoFormService.createProyecto(this.proyecto).subscribe(
      (response) => {
        console.log('Formulario enviado:', response);
        if (response.success) {
          this.successMessage = 'El proyecto se ha creado correctamente.';
          this.getProyectos(); 
          this.resetForm();
        } else {
          this.error = 'Hubo un problema al crear el proyecto.';
        }
        this.isLoading = false;
        this.hideMessages();
      },
      (error) => {
        console.error('Error al enviar el formulario:', error);
        this.error = `Error al enviar el formulario: ${error}`;
        this.isLoading = false;
        this.hideMessages();
      }
    );  
  }

  hideMessages(): void {
    setTimeout(() => {
      this.error = null;
      this.successMessage = null;
    }, 5000); 
  }

  resetForm(): void {
    this.proyecto = {
      nombre: '',
      fk_fundacion: 0

    };
  }
}
