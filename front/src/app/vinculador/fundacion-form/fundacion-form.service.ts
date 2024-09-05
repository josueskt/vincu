import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FundacionFormService {

  base = environment.URL;
  private fundacionFormUrl = `${this.base}fundacion`;

  constructor(private http: HttpClient) { }

  getFundacionForm(): Observable<any[]> {
    return this.http.get<any[]>(this.fundacionFormUrl).pipe(
      catchError(this.handleError)
    );
  }

  postFundacionForm(fundacionForm: any): Observable<any> {
    return this.http.post<any>(this.fundacionFormUrl, fundacionForm).pipe(
      map(response => ({ success: true, data: response })),
      catchError(error => {
        if (error.status >= 200 && error.status < 300) {
          // Si es un código de éxito, lo tratamos como tal
          return of({ success: true, data: error.error });
        }
        // Para otros errores, usamos el manejador de errores
        return this.handleError(error);
      })
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocurrió un error desconocido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Código de error: ${error.status}, mensaje: ${error.error?.message || error.statusText}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
