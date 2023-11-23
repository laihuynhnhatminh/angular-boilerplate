import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (await import('@page/home')).routes,
      },
      {
        path: 'auth',
        loadChildren: async () => (await import('@page/auth')).routes,
      },
    ],
  },
];
