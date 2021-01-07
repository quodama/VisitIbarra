import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmprendimientosPage } from './emprendimientos.page';

const routes: Routes = [
  {
    path: '',
    component: EmprendimientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmprendimientosPageRoutingModule {}
