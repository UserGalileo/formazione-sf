import { Routes } from '@angular/router';
import {PageNotFound} from './components/page-not-found';
import {Users} from './components/users';
import {User} from './components/user';
import {Home} from './components/home';
import {authGuard} from './guards/auth.guard';
import {Form} from './components/form';
import {Todos} from './features/todos/todos';
import {provideState} from '@ngrx/store';
import {todosFeature} from './features/todos/store/todos.reducer';
import {provideEffects} from '@ngrx/effects';
import * as todosEffects from './features/todos/store/todos.effects';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  {
    path: 'form',
    component: Form,
    // canDeactivate: [canDeactivateGuard]
  },
  {
    path: 'todos',
    component: Todos,
    providers: [
      provideState(todosFeature),
      provideEffects(todosEffects)
    ]
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

