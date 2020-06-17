import { Component, OnInit } from '@angular/core';

import{ Router,ActivatedRoute} from '@angular/router';
import { Perfil } from '../../modelo/perfil';
import{PerfilServicioService} from '../../servicio/perfil-servicio.service';
import { Contacto } from 'src/app/modelo/contacto';
import {Descarte} from '../../modelo/descarte';

@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-lista.component.html',
  styleUrls: ['./perfil-lista.component.css']
})
export class PerfilListaComponent implements OnInit {

  perfiles: Perfil[]; 
  id:number
  contacto:Contacto;
  descarte:Descarte;

  constructor(private router: ActivatedRoute, private perfilServicio: PerfilServicioService) { }

  ngOnInit(): void {
    this.perfilServicio.getPerfiles()
    .subscribe(data => {
      this.perfiles = data;
    });
  }

  crearContacto(perfil2:Perfil): void {
    this.router.params.subscribe(params =>{this.id= +params['id']})   
    this.perfilServicio.addContacto(this.id,perfil2.id).subscribe(data => {
      this.contacto = data;
    })
  };

  crearDescarte(perfil1:Perfil): void {
    this.router.params.subscribe(params =>{this.id= +params['id']})
    this.perfilServicio.addDescarte(this.id,perfil1.id).subscribe(data => {
      this.descarte = data;
    }) 
  };

}
