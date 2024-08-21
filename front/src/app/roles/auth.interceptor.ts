// auth.interceptor.ts

import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private authService=inject( AuthService)
  

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    if (token) {
      const cloned = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      return next.handle(cloned);
    }

    return next.handle(request);
  }
}
