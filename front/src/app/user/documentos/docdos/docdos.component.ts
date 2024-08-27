import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../../documentos/encabezado/encabezado.component';

@Component({
  selector: 'app-docdos',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './docdos.component.html',
  styleUrl: './docdos.component.css'
})
export class DocdosComponent {
  titulo = 'FORMATO 05 INICIO DE ACTIVIDADES DEL AUTOR'

  estudiente = {cedula:'1753059458',nombres:'Stiven Josue Mantuano Zambrano' ,carrera:{nombre:'TECNOLOGÍA SUPERIOR EN DESARROLLO DE SOFTWARE ' ,cordinador:' yo mismo ', asignaturas:[{nombre:'FUNDAMENTOS DE PROGRAMACION' },{nombre:'TENDENCIAS DE PROGRAMACION'}] }, nivel:'Quinto' , proyecto:{id:1,inicia:'05/asd/2020', final:'07/07/0777', ciclo:'20204-1'}}
  docente_tutor = {cedula:'123131313131', nombre:'DOCENTE TUTOR SJSJ'}
  funcacion={nombre:'FUNDACION PARA LA AYUDA Y DESARROLLO SOCIAL NUEVO PORVENIR' , entidad:'Diego Yanez'}
}
