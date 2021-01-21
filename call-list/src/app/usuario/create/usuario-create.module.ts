import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioCreatePageRoutingModule } from './usuario-create-routing.module';

import { UsuarioCreatePage } from './usuario-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioCreatePageRoutingModule
  ],
  declarations: [UsuarioCreatePage]
})
export class UsuarioCreatePageModule { }
