import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioUpdatePage } from './usuario-edit.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioUpdatePageRoutingModule { }
