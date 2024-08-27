import { Component } from '@angular/core';
import { EncabezadoComponent } from '../../../documentos/encabezado/encabezado.component';

@Component({
  selector: 'app-doccuatro',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './doccuatro.component.html',
  styleUrl: './doccuatro.component.css'
})
export class DoccuatroComponent {
  titulo = ""
  estudiente = {cedula:'1753059458',nombres:'Stiven Josue Mantuano Zambrano' ,carrera:{nombre:'TECNOLOGÍA SUPERIOR EN DESARROLLO DE SOFTWARE ' ,cordinador:' yo mismo ', asignaturas:[{nombre:'FUNDAMENTOS DE PROGRAMACION' },{nombre:'TENDENCIAS DE PROGRAMACION'}] }, nivel:'Quinto' , proyecto:{id:1,inicia:'05/asd/2020', final:'07/07/0777', ciclo:'20204-1'}}
  docente_tutor = {cedula:'123131313131', nombre:'DOCENTE TUTOR SJSJ'}
}
