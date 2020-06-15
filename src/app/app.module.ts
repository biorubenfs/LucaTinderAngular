import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilAddComponent } from './componentes/perfil-add/perfil-add.component';
import { PerfilListaComponent } from './componentes/perfil-lista/perfil-lista.component';

import {PerfilServicioService} from './servicio/perfil-servicio.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import{LoginService} from './servicio/login.service';

@NgModule({
  declarations: [
    AppComponent,
    PerfilAddComponent,
    PerfilListaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService,PerfilServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
