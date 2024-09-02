import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';  // Importa tu AppRoutingModule
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { AuthGuard } from './services/AuthGuard ';
import { AuthInterceptor } from './services/auth.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),  // Importa HttpClientModule
    importProvidersFrom(AppRoutingModule),  // Importa AppRoutingModule
    importProvidersFrom(BrowserAnimationsModule),  // Importa BrowserAnimationsModule
    importProvidersFrom(RouterModule.forRoot(routes)), // Importa las rutas
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },  // Registro del interceptor
    AuthGuard,  // Registra el servicio de autenticación
  ]
}).catch(err => console.error(err));
