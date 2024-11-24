import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import("./modules/global/pages/home/home.component").then(m => m.HomeComponent)
  },
  {
    path: '**',
    redirectTo: 'gome'
  }
];
