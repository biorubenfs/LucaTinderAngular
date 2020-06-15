import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{PerfilAddComponent} from './componentes/perfil-add/perfil-add.component';
import { PerfilListaComponent } from './componentes/perfil-lista/perfil-lista.component';
import{LoginComponent} from './componentes/login/login.component';
import{InicioPerfilComponent} from './componentes/inicio-perfil/inicio-perfil.component';


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
  {
    path:'inicio',
    component:InicioPerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
