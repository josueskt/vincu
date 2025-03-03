import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoFormService {
  base = environment.URL;
  private proyectoFormUrl = `${this.base}proyectos`;

  constructor(private http: HttpClient) { }

  getProyectos(): Observable<any[]> {
    return this.http.get<any[]>(this.proyectoFormUrl).pipe(
      tap(data => console.log('Datos recibidos del servidor:', data)),
      catchError(this.handleError)
    );
  }

  createProyecto(proyecto: any): Observable<any> {
    return this.http.post<any>(this.proyectoFormUrl, proyecto).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
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
