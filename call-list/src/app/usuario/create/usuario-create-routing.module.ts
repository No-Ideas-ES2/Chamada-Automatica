import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioCreatePage } from './usuario-create.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioCreatePageRoutingModule { }
