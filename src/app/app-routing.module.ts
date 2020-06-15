import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{PerfilAddComponent} from './componentes/perfil-add/perfil-add.component';


const routes: Routes = [
  {
    path:'add',
    component:PerfilAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
