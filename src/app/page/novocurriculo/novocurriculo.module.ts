import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovocurriculoPageRoutingModule } from './novocurriculo-routing.module';

import { NovocurriculoPage } from './novocurriculo.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovocurriculoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NovocurriculoPage]
})
export class NovocurriculoPageModule {}
