import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddSimCardPageRoutingModule } from './add-simcard-routing.module';
import { AddSimCardPage } from './add-simcard.page'; // Corregido a 'AddSimCardPage'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSimCardPageRoutingModule,
  ],
  declarations: [AddSimCardPage], // Corregido a 'AddSimCardPage'
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agregado 'CUSTOM_ELEMENTS_SCHEMA'
})
export class AddSimCardPageModule {} // Corregido a 'AddSimCardPageModule'
