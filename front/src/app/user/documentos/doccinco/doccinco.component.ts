import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../../documentos/encabezado/encabezado.component';

@Component({
  selector: 'app-doccinco',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './doccinco.component.html',
  styleUrl: './doccinco.component.css'
})
export class DoccincoComponent {
titulo  ="FORMATO 06 CONTROL DE ASISTENCIA DEL ESTUDIANTE"
titulo_proyecto = 'Sistema de gestión de libros de biblioteca de la Fundación para la Ayuda y Desarrollo Social Nuevo Porvenir'
 estudiente = {cedula:'1753059458',nombres:'Stiven Josue Mantuano Zambrano' ,carrera:{nombre:'TECNOLOGÍA SUPERIOR EN DESARROLLO DE SOFTWARE ' ,cordinador:' yo mismo ', asignaturas:[{nombre:'FUNDAMENTOS DE PROGRAMACION' },{nombre:'TENDENCIAS DE PROGRAMACION'}] }, nivel:'Quinto' , proyecto:{id:1,inicia:'05/asd/2020', final:'07/07/0777', ciclo:'20204-1'}}
 docente_tutor = {cedula:'123131313131', nombre:'DOCENTE TUTOR SJSJ'}
 funcacion={nombre:'FUNDACION PARA LA AYUDA Y DESARROLLO SOCIAL NUEVO PORVENIR' , entidad:'Diego Yanez'}

actividades = [
 
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
  {fecha:'05/03/2024',hora_salida:'8.00.00',hora_entrada:'8.00.00' ,total_h:'04.00.00' ,actividad:'Inicio y planificación de actividades					' },
]
}
