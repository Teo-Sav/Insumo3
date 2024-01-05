import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio2PageRoutingModule } from './ejercicio2-routing.module';

import { Ejercicio2Page } from './ejercicio2.page';
import { SharedModule } from '../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    Ejercicio2PageRoutingModule
  ],
  declarations: [Ejercicio2Page]
})
export class Ejercicio2PageModule {}
