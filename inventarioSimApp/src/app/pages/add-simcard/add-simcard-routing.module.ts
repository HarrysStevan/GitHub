import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSimCardPage } from './add-simcard.page'; // Corregido a 'AddSimCardPage'

const routes: Routes = [
  {
    path: '',
    component: AddSimCardPage, // Corregido a 'AddSimCardPage'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSimCardPageRoutingModule {} // Corregido a 'AddSimCardPageRoutingModule'
