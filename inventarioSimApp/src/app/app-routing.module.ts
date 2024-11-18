import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'dashboard/admin',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: 'dashboard/user',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard/admin', // Default to admin
    pathMatch: 'full',
  },
  {
    path: 'add-simcard',
    loadChildren: () =>
      import('./pages/add-simcard/add-simcard.module').then(
        (m) => m.AddSimCardPageModule
      ),
  },
  {
    path: 'edit-simcard/:id',
    loadChildren: () =>
      import('./pages/edit-simcard/edit-simcard.module').then(
        (m) => m.EditSimCardPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
