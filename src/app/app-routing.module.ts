import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{PerfilAddComponent} from './componentes/perfil-add/perfil-add.component';
import { PerfilListaComponent } from './componentes/perfil-lista/perfil-lista.component';
import{LoginComponent} from './componentes/login/login.component';
import {PerfilContactoComponent } from './componentes/perfil-contacto/perfil-contacto.component';


const routes: Routes = [
  {
    path:'add',
    component:PerfilAddComponent
  },
  {
    path:'listar',
    component:PerfilListaComponent
  },
  { path: 'login', 
    component: LoginComponent,  
    pathMatch: 'full'
  },
  { path: 'contacto', 
    component: PerfilContactoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
