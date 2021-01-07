import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAtractivosPageRoutingModule } from './menu-atractivos-routing.module';

import { MenuAtractivosPage } from './menu-atractivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAtractivosPageRoutingModule
  ],
  declarations: [MenuAtractivosPage]
})
export class MenuAtractivosPageModule {}
