import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { MicroProyecto } from './../../interfaces/microproyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class MicroProyectoFormService {
  base = environment.URL;
  private microProyectoUrl = `${this.base}micro-proyecto`;


  constructor(private http: HttpClient) { }
  getMicroProyectos(): Observable<MicroProyecto[]> {
    return this.http.get<MicroProyecto[]>(this.microProyectoUrl).pipe(
      tap(data => console.log('Microproyectos recibidos:', data)),
      catchError(this.handleError)
    ) as Observable<MicroProyecto[]>;
  }

  createMicroProyecto(microProyecto: MicroProyecto): Observable<any> {
    return this.http.post<MicroProyecto>(this.microProyectoUrl, microProyecto).pipe(
      tap(response => console.log('Respuesta del servidor:', response)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 201) {
      // Este no es un error, es una respuesta exitosa
      return new Observable(observer => {
        observer.next({ success: true, message: 'Microproyecto creado exitosamente' });
        observer.complete();
      });
    }

    let errorMessage = 'Ocurrió un error desconocido';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // El backend retornó un código de error
      errorMessage = `Código de error ${error.status}, mensaje: ${error.error.message || error.statusText}`;
    }
    console.error('Error detallado:', error);
    return throwError(errorMessage);
  }
}
