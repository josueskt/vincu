import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IntialHomeComponent } from '../../intial-home/intial-home.component';
import { FundacionFormService } from './fundacion-form.service';
import { Fundacion } from '../../interfaces/fundacion.interface';

@Component({
  selector: 'app-fundacion-form',
  standalone: true,
  imports: [IntialHomeComponent, CommonModule, FormsModule],
  templateUrl: './fundacion-form.component.html',
  styleUrl: './fundacion-form.component.css'
})
export class FundacionFormComponent implements OnInit {
  fundacion: Fundacion = {
    ruc: '',
    nombre: '',
    razon_social: '',
    telefono: '',
    email: '',
    provincia: '',
    canton: '',
    parroquia: '',
    direccion: '',
    fk_representante_legal: '',
    fk_tutor_empresarial: ''
  };
  fundaciones: Fundacion[] = [];
  isLoading: boolean = false;
  error: string | null = null;
  successMessage: string | null = null;

  constructor(private fundacionFormService: FundacionFormService) { }

  ngOnInit(): void {
    this.getFundaciones();
  }
  
  getFundaciones(): void {
    this.isLoading = true;
    this.error = null;
    this.fundacionFormService.getFundacionForm().subscribe(
      (data) => {
        console.log('Datos recibidos en el componente:', data);
        this.fundaciones = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error en el componente:', error);
        this.error = `Error al cargar las fundaciones: ${error}`;
        this.isLoading = false;
      }
    );
  }

  onSubmit(): void {
    this.isLoading = true;
    this.error = null;
    this.successMessage = null;
    this.fundacionFormService.postFundacionForm(this.fundacion).subscribe(
      (response) => {
        console.log('Formulario enviado:', response);
        if (response.success) {
          this.successMessage = 'La fundación se ha creado correctamente.';
          this.getFundaciones(); // Actualizar la lista después de crear una nueva fundación
          this.resetForm();
        } else {
          this.error = 'Hubo un problema al crear la fundación.';
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
    this.fundacion = {
      ruc: '',
      nombre: '',
      razon_social: '',
      telefono: '',
      email: '',
      provincia: '',
      canton: '',
      parroquia: '',
      direccion: '',
      fk_representante_legal: '',
      fk_tutor_empresarial: ''
    };
  }
}
