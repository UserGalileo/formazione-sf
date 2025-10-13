import { Routes } from '@angular/router';
import {PageNotFound} from './components/page-not-found';
import {Users} from './components/users';
import {User} from './components/user';
import {Home} from './components/home';
import {authGuard} from './guards/auth.guard';
import {Form} from './components/form';
import {canDeactivateGuard} from './guards/can-deactivate.guard';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  {
    path: 'form',
    component: Form,
    canDeactivate: [canDeactivateGuard]
  },
  {
    path: 'profile',
    // Lazy Loading
    loadComponent: () => import('./components/profile'),
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.routes'),
    canMatch: [authGuard],
  },
  { path: 'users',
    component: Users,
    children: [
      { path: ':userId', component: User },
    ]
  },
  { path: '**', component: PageNotFound }
];

