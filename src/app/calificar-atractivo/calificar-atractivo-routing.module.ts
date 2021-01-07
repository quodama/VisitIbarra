import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalificarAtractivoPage } from './calificar-atractivo.page';

const routes: Routes = [
  {
    path: '',
    component: CalificarAtractivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalificarAtractivoPageRoutingModule {}
