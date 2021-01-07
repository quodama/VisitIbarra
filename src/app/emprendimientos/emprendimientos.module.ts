import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmprendimientosPageRoutingModule } from './emprendimientos-routing.module';

import { EmprendimientosPage } from './emprendimientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmprendimientosPageRoutingModule
  ],
  declarations: [EmprendimientosPage]
})
export class EmprendimientosPageModule {}
