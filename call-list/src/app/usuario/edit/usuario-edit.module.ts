import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioUpdatePageRoutingModule } from './usuario-edit-routing.module';

import { UsuarioUpdatePage } from './usuario-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioUpdatePageRoutingModule
  ],
  declarations: [UsuarioUpdatePage]
})
export class UsuarioUpdatePageModule { }
