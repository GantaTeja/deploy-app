import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    loadComponent: () =>
      import('../components/dashboard/dashboard.component').then(
        (m: { DashboardComponent: any }) => m.DashboardComponent
      ),
  },
  {
    path: 'orders',
    pathMatch: 'full',
    loadComponent: () =>
      import('../components/orders/orders.component').then(
        (m) => m.OrdersComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('../components/dummypage/dummypage.component').then(
        (m) => m.DummypageComponent
      ),
  },
];
