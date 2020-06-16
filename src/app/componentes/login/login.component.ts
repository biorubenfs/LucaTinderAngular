import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';
import{Perfil} from '../../modelo/perfil';
import{PerfilServicioService} from '../../servicio/perfil-servicio.service';
import{LoginService} from '../../servicio/login.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'LoginBasico';

  perfil:Perfil=new Perfil();
  public perfilLogged:Perfil;
  emailREST:String

  constructor(
    private loginService: LoginService,
    private router: Router,
    private perfilServicio:PerfilServicioService
    ) { }

  ngOnInit(): void {
    //this.perfilLogged = this.perfilServicio.getPerfilLoggedIn();
    //console.log("--- LoginComponent > ngOnInit > getPerfilLoggedIn: Datos al arrancar ");
    //console.log(this.perfilLogged);
  }

  /*logIn(email: string, password: string, event: Event) {

    event.preventDefault(); 

    this.loginService.login(email,password).subscribe(

      res => {
        
        console.log("--- LoginComponent > ngOnInit > getUserLoggedIn: ¿Hay usuario?");
        console.log(res);
        let p: Perfil=new Perfil();
        p.email=email;
        this.perfilServicio.setPerfilLoggedIn(p);

      },
      error => {
        console.error(error);
      },
      () => this.goToListado
    );

  }

  logOut(event: Event) {
    event.preventDefault();
    this.perfilServicio.destroyPerfilLogged();
    console.log("--- LoginComponent > logOut >>>> saliendo");
    this.navigate();
  }

  navigate() {
    console.log("--- LoginComponent > navigate >>>> recargando página");
    window.location.reload();
  }*/

  onSubmit():void{
    this.perfilServicio.findByEmail(this.emailREST).subscribe(result=>this.goToListado(+result.id));
  }

  goToListado(id:Number):void{
    this.router.navigate(['/inicio']);
  }

}
