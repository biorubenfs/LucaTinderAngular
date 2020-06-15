import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{PerfilAddComponent} from './componentes/perfil-add/perfil-add.component';
import { PerfilListaComponent } from './componentes/perfil-lista/perfil-lista.component';


const routes: Routes = [
  {
    path:'add',
    component:PerfilAddComponent
  },
  {
    path:'listar',
    component:PerfilListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
