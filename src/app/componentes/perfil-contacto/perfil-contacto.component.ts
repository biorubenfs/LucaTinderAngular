import { Component, OnInit } from '@angular/core';
import { Perfil } from '../../modelo/perfil';
import{PerfilServicioService} from '../../servicio/perfil-servicio.service';
import{ Router} from '@angular/router';


@Component({
  selector: 'app-perfil-contacto',
  templateUrl: './perfil-contacto.component.html',
  styleUrls: ['./perfil-contacto.component.css']
})
export class PerfilContactoComponent implements OnInit {

  perfiles: Perfil[];
  id: number;

  constructor(private router: Router, private perfilServicio: PerfilServicioService) { }

  ngOnInit(): void {
    this.perfilServicio.getContactos(this.id)
    .subscribe(data => {
      //this.perfiles = data;
    });
  }

}
