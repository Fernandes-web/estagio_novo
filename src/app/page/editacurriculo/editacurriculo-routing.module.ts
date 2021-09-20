import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditacurriculoPage } from './editacurriculo.page';

const routes: Routes = [
  {
    path: '',
    component: EditacurriculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditacurriculoPageRoutingModule {}
