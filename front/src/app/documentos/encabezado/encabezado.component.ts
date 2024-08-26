import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {
@Input() titulo_documento:string = ''
datos = {version:'0.1',elaboracion:'15/34/2030',actualizacion:'15/34/2030',codigo:'12312334'}
}
