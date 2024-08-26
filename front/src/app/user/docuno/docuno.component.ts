import { Component, inject } from '@angular/core';
import { EncabezadoComponent } from '../../documentos/encabezado/encabezado.component';
import { FormsModule } from '@angular/forms';
import { PdfService } from '../../pdf.service';

@Component({
  selector: 'app-docuno',
  standalone: true,
  imports: [EncabezadoComponent,FormsModule],
  templateUrl: './docuno.component.html',
  styleUrl: './docuno.component.css'
})
export class DocunoComponent {
  private pdf_s = inject(PdfService)

  titulo = 'FORMATO 05 INICIO DE ACTIVIDADES DEL AUTOR'
  table = false
  indexx = 0
  observaciones_table = false

  estudiente = {cedula:'1753059458',nombres:'Stiven Josue Mantuano Zambrano' ,carrera:{nombre:'TECNOLOGÍA SUPERIOR EN DESARROLLO DE SOFTWARE ' ,cordinador:' yo mismo ', asignaturas:[{nombre:'FUNDAMENTOS DE PROGRAMACION' },{nombre:'TENDENCIAS DE PROGRAMACION'}] }, nivel:'Quinto' , proyecto:{id:1,inicia:'2024-05-06', final:'2024-04-04', ciclo:'20204-1'}}
 docente_tutor = {cedula:'123131313131', nombre:'DOCENTE TUTOR SJSJ'}
 funcacion={nombre:'FUNDACION PARA LA AYUDA Y DESARROLLO SOCIAL NUEVO PORVENIR' , entidad:'Diego Yanez'}
 actividades_tutor= [
 
  {fecha:'2024-03-02',hora_salida:'16:00',hora_entrada:'8:00'  ,actividad:'Inicio y planificación de actividades					', editable:false },

]

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.calcualr()
}

imprimir(){
  this.pdf_s.generatePDF('a4-page','intento')
}
calcualr(){
  let total_horas  =0
  for(const va of this.actividades_tutor){
   total_horas += ( this.timeToSeconds(va.hora_salida) -this.timeToSeconds(va.hora_entrada))

  }
  return total_horas
}


agregar() {
  const newIndex = this.actividades_tutor.push(
    {
      fecha: '2024-03-02',
      hora_salida: '16:00',
      hora_entrada: '8:00',
      actividad: 'Inicio y planificación de actividades ',
      editable: false
    }
  ) ;

  this.calcualr();

  this.table = this.isDivHeightGreaterThan("tabla", 600);
this.observaciones_table = this.isDivHeightGreaterThan("tabla", 450);
  if(!this.table){

    this.indexx = newIndex
    console.log("es")
  }

}

eliminar(id:number){
  if(id == 0 || id == this.actividades_tutor.length -1){
    alert("no puede eliminar la fecha de inicio ni la fecha final ")
    return
  }
 this.actividades_tutor.splice(id,1)
this.calcualr()
this.observaciones_table = this.isDivHeightGreaterThan("tabla", 450);

this.table = this.isDivHeightGreaterThan("tabla", 600);

if(!this.table){

  this.indexx = id
  console.log("es")
}
}


editar(index: number) {
  this.actividades_tutor[index].editable = true;
}

guardar(index: number) {
  this.actividades_tutor[index].editable = false;
  this.calcualr()
}

secondsToTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
 

  return [
      String(hours).padStart(2, '0'),
      String(minutes).padStart(2, '0'),
      
  ].join(':');
}


 timeToSeconds(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return (hours * 3600) + (minutes * 60) ;
}


isDivHeightGreaterThan(id: string, minHeight: number): boolean {
  const divElement = document.getElementById(id);
  if (divElement) {
    const height = divElement.clientHeight;
    return height > minHeight;
  }
  return false;
}


}
