import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import{Perfil} from '../../modelo/perfil';
import{PerfilServicioService} from '../../servicio/perfil-servicio.service';

@Component({
  selector: 'app-perfil-add',
  templateUrl: './perfil-add.component.html',
  styleUrls: ['./perfil-add.component.css']
})
export class PerfilAddComponent implements OnInit {

  perfil:Perfil=new Perfil();

  constructor(private router:Router,private perfilServicio:PerfilServicioService) { }

  crearPerfil(): void {
    this.perfilServicio.crearPerfil(this.perfil)
      .subscribe(data => {
        alert("Perfil generado de forma correcta.");
      });

  };

  ngOnInit(): void {
  }

}
