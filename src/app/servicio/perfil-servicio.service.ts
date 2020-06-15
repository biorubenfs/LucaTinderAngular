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

  private isPerfilLoggedIn:boolean;
  public perfilLogged:Perfil;

  constructor(private http:HttpClient) { 
    this.isPerfilLoggedIn = false;
  }

  private perfilUrl='http://localhost:8080/rperfil';

  public getPerfiles(){
    return this.http.get<Perfil[]>(this.perfilUrl + "/listar");
  }

  public crearPerfil(perfil:Perfil){
    return this.http.post<Perfil>(this.perfilUrl + "/alta", perfil);
  }

  setPerfilLoggedIn(perfil:Perfil) {
    this.isPerfilLoggedIn = true;
    this.perfilLogged = perfil;
    console.log("--- Perfil.service > setPerfilLoggedIn::  guardo perfil");
    localStorage.setItem('PerfilLog', JSON.stringify(perfil));
  
  }

  getPerfilLoggedIn() {
    console.log("--- Perfil.service > getPerfilLoggedIn::  recupero perfil");
  	return JSON.parse(localStorage.getItem('PerfilLog'));
  }

  destroyPerfilLogged(){
    this.isPerfilLoggedIn = false;
    console.log("--- Perfil.service > destroyPerfilLogged::  destruyo perfil");
    localStorage.removeItem('PerfilLog');
  }

  findByEmail(email:String){
    return this.http.get<Perfil>(this.perfilUrl+"/listar");
  }

}
