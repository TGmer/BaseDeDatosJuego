import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import {  MatTabsModule } from '@angular/material/tabs';
import {  MatIconModule } from '@angular/material/icon';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {  MatSelectModule } from '@angular/material/select';
import { BarraBusquedaComponent } from './Componentes/barra-busqueda/barra-busqueda.component';
import { HomeComponent } from './Componentes/home/home.component'
import { HttpHeadersInterceptor } from './interceptores/http-headers.interceptor';
import { HttpErrorsInterceptor } from './interceptores/http-errors.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    BarraBusquedaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    GaugeModule.forRoot()

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
