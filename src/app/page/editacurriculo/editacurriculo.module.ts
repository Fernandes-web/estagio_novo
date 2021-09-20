import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditacurriculoPageRoutingModule } from './editacurriculo-routing.module';

import { EditacurriculoPage } from './editacurriculo.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditacurriculoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditacurriculoPage]
})
export class EditacurriculoPageModule {}
