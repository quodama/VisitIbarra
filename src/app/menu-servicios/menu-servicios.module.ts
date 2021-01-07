import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuServiciosPageRoutingModule } from './menu-servicios-routing.module';

import { MenuServiciosPage } from './menu-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuServiciosPageRoutingModule
  ],
  declarations: [MenuServiciosPage]
})
export class MenuServiciosPageModule {}
