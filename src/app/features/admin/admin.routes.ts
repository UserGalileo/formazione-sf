import {Routes} from '@angular/router';
import {AdminHome} from './admin-home';
import {AdminUsers} from './admin-users';

export default [
  { path: '', component: AdminHome },
  { path: 'users', component: AdminUsers }
] satisfies Routes;

