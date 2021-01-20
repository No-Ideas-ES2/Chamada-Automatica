import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioListPage } from './usuario-list.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioListPageRoutingModule { }
