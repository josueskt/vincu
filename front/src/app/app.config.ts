import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './roles/auth.guard';
import { AuthInterceptor } from './roles/auth.interceptor';
import { loggerInter } from './roles/logger.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    
    provideHttpClient(withInterceptors([loggerInter])),
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }, provideAnimationsAsync(),]
};
