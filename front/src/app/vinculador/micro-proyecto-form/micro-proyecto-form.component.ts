import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MicroProyectoFormService } from './micro-proyecto-form.service';
import { MicroProyecto } from '../../interfaces/microproyecto.interface';


@Component({
  selector: 'app-micro-proyecto-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './micro-proyecto-form.component.html',
  styleUrls: ['./micro-proyecto-form.component.css']
})
export class MicroProyectoFormComponent implements OnInit {
  microProyecto: MicroProyecto = {
    titulo: '',
    fecha_inicio: '',
    fecha_fin: '',
    fk_proyecto: 0,
    c_y_l: '',
    plazo_ejeucion: 0
  };
  microProyectos: MicroProyecto[] = [];
  isLoading = false;
  error: string | null = null;
  successMessage: string | null = null;

  constructor(private microProyectoFormService: MicroProyectoFormService) { }

  ngOnInit(): void {
    this.getMicroProyectos();
  }
  
  getMicroProyectos(): void {
    this.isLoading = true;
    this.error = null;
    this.microProyectoFormService.getMicroProyectos().subscribe(
      (data) => {
        console.log('Datos recibidos en el componente:', data);
        this.microProyectos = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error en el componente:', error);
        this.error = `Error al cargar los microproyectos: ${error}`;
        this.isLoading = false;
      }
    );
  }

  onSubmit(): void {
    this.isLoading = true;
    this.error = null;
    this.successMessage = null;
    this.microProyectoFormService.createMicroProyecto(this.microProyecto).subscribe(
      (response) => {
        console.log('Formulario enviado:', response);
        if (response.success) {
          this.successMessage = 'El microproyecto se ha creado correctamente.';
          this.getMicroProyectos(); // Actualizar la lista después de crear un nuevo microproyecto
          this.resetForm();
        } else {
          this.error = 'Hubo un problema al crear el microproyecto.';
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
    }, 5000); // Oculta los mensajes después de 5 segundos
  }

  resetForm(): void {
    this.microProyecto = {
      titulo: '',
      fecha_inicio: '',
      fecha_fin: '',
      fk_proyecto: 0,
      c_y_l: '',
      plazo_ejeucion: 0
    };
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${day}/${year}`;
  }
}
