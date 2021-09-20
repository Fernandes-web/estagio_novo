import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovocurriculoPage } from './novocurriculo.page';

const routes: Routes = [
  {
    path: '',
    component: NovocurriculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovocurriculoPageRoutingModule {}
