import { Component, OnInit } from '@angular/core';
import { Perfil } from '../../modelo/perfil';
import{PerfilServicioService} from '../../servicio/perfil-servicio.service';
import{ Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-perfil-match',
  templateUrl: './perfil-match.component.html',
  styleUrls: ['./perfil-match.component.css']
})
export class PerfilMatchComponent implements OnInit {

  perfiles: Perfil[];
  id: number;

  constructor(private router: ActivatedRoute, private perfilServicio: PerfilServicioService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params =>{this.id= +params['id']})
    this.perfilServicio.getMatches(this.id).subscribe(data => {
      this.perfiles = data;
    });
  }

}
