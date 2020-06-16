import { Component, OnInit } from '@angular/core';
import { Perfil } from '../../modelo/perfil';
import{PerfilServicioService} from '../../servicio/perfil-servicio.service';
import{ Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-perfil-descarte',
  templateUrl: './perfil-descarte.component.html',
  styleUrls: ['./perfil-descarte.component.css']
})
export class PerfilDescarteComponent implements OnInit {

  perfiles: Perfil[];
  id: number;

  constructor(private router: ActivatedRoute, private perfilServicio: PerfilServicioService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params =>{this.id= +params['id']})
    this.perfilServicio.getDescartes(this.id).subscribe(data => {
      this.perfiles = data;
    });
  }

}
