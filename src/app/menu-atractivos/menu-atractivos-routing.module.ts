import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAtractivosPage } from './menu-atractivos.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAtractivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAtractivosPageRoutingModule {}
