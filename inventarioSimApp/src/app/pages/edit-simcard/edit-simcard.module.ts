import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditSimCardPageRoutingModule } from './edit-simcard-routing.module';
import { EditSimCardPage } from './edit-simcard.page'; // Corregido a 'EditSimCardPage'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSimCardPageRoutingModule,
  ],
  declarations: [EditSimCardPage], // Corregido a 'EditSimCardPage'
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agregado 'CUSTOM_ELEMENTS_SCHEMA'
})
export class EditSimCardPageModule {} // Corregido a 'EditSimCardPageModule'
