import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Perfil} from '../modelo/perfil';
import {Contacto} from '../modelo/contacto';
import {Descarte} from '../modelo/descarte';

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

  /*setPerfilLoggedIn(perfil:Perfil) {
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
  }*/

  public findByEmail(email:string){
    return this.http.get<Perfil>(this.perfilUrl+"/listar/"+email);
  }

  public getContactos(id:number) {
    return this.http.get<Perfil[]>(this.perfilUrl+"/listarContactos/"+id);
  }

  public getDescartes(id:number) {
    return this.http.get<Perfil[]>(this.perfilUrl+"/listarDescartes/"+id);
  }

  public addContacto(id1:number, id2:number) {
    return this.http.post<Contacto>(this.perfilUrl+"/altaContacto", {"id_perfil1" : id1,"id_perfil2" : id2});
  }

  public addDescarte(id1:number, id2:number){
    return this.http.post<Descarte>(this.perfilUrl+"/altaDescarte", {"id_perfil1" : id1,"id_perfil2" : id2});
  }

}
