import { Component, OnInit } from '@angular/core';

import{ Router} from '@angular/router';
import { Perfil } from '../../modelo/perfil';
import{PerfilServicioService} from '../../servicio/perfil-servicio.service';

@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-lista.component.html',
  styleUrls: ['./perfil-lista.component.css']
})
export class PerfilListaComponent implements OnInit {

  perfiles: Perfil[];

  constructor(private router: Router, private perfilServicio: PerfilServicioService) { }

  ngOnInit(): void {
    this.perfilServicio.getPerfiles()
    .subscribe(data => {
      this.perfiles = data;
    });
  }

  crearContacto(): void {

  };

  crearDescarte(): void {

  };

}
