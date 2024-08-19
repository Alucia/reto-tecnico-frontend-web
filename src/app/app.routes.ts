import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadComponent: () => import('./pages/users/users.component').then((m) => m.UsersComponent),
  },
  {
    path: 'user/:idUser',
    loadComponent: () => import('./pages/user/user.component').then((m) => m.UserComponent),
  },
  {
    path: 'form',
    loadComponent: () => import('./pages/user-form/user-form.component').then((m) => m.UserFormComponent),
  },
  {
    path: 'user/:idUser/transactions/:idAccount',
    loadComponent: () => import('./pages/transactions/transactions.component').then((m) => m.TransactionsComponent),
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/users',
  }

];
