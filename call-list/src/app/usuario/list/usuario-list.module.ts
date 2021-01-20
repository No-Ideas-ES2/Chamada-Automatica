import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioListPageRoutingModule } from './usuario-list-routing.module';

import { UsuarioListPage } from './usuario-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioListPageRoutingModule
  ],
  declarations: [UsuarioListPage]
})
export class UsuarioListPageModule { }
