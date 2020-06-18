import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PerfilAddComponent} from './componentes/perfil-add/perfil-add.component';
import {PerfilListaComponent } from './componentes/perfil-lista/perfil-lista.component';
import {LoginComponent} from './componentes/login/login.component';
import {PerfilContactoComponent} from './componentes/perfil-contacto/perfil-contacto.component';
import {PerfilDescarteComponent} from './componentes/perfil-descarte/perfil-descarte.component';
import {PerfilMatchComponent} from './componentes/perfil-match/perfil-match.component';


const routes: Routes = [
  {
    path:'add',
    component:PerfilAddComponent
  },
  {
    path:'listar/:id',
    component:PerfilListaComponent
  },
  { path: 'login', 
    component: LoginComponent,  
    pathMatch: 'full'
  },
  { path: 'listar/:id/contacto', 
    component: PerfilContactoComponent
  },
  { path: 'listar/:id/descarte', 
    component: PerfilDescarteComponent
  },
  { path: 'listar/:id/juntos', 
    component: PerfilMatchComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
