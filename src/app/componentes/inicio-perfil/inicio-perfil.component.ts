import { Component, OnInit } from '@angular/core';

import{Perfil} from '../../modelo/perfil';
import{PerfilServicioService} from '../../servicio/perfil-servicio.service';
import{LoginService} from '../../servicio/login.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-inicio-perfil',
  templateUrl: './inicio-perfil.component.html',
  styleUrls: ['./inicio-perfil.component.css']
})
export class InicioPerfilComponent implements OnInit {

  perfil:Perfil=new Perfil();

  constructor(private loginService: LoginService,
    private router: Router,
    private perfilServicio:PerfilServicioService) { }

  ngOnInit(): void {
  }

}
