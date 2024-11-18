import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditSimCardPage } from './edit-simcard.page'; // Corregido a 'EditSimCardPage'

const routes: Routes = [
  {
    path: '',
    component: EditSimCardPage, // Corregido a 'EditSimCardPage'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditSimCardPageRoutingModule {} // Corregido a 'EditSimCardPageRoutingModule'
