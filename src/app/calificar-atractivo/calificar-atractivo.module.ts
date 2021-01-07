import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificarAtractivoPageRoutingModule } from './calificar-atractivo-routing.module';

import { CalificarAtractivoPage } from './calificar-atractivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificarAtractivoPageRoutingModule
  ],
  declarations: [CalificarAtractivoPage]
})
export class CalificarAtractivoPageModule {}
