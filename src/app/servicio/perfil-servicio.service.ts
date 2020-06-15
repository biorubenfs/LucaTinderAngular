import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Perfil} from '../modelo/perfil';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PerfilServicioService {

  constructor(private http:HttpClient) { }

  private perfilUrl='http://localhost:8080/rperfil';

  public getPerfiles(){
    return this.http.get<Perfil[]>(this.perfilUrl + "/listar");
  }

  public crearPerfil(perfil:Perfil){
    return this.http.post<Perfil>(this.perfilUrl + "/alta", perfil);
  }
}
