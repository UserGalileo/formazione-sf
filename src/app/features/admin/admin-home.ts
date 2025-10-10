import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-admin-home',
  imports: [
    RouterLink
  ],
  template: `
    Admin Home
    <a routerLink="/admin/users"><button>Admin users</button></a>
  `
})
export class AdminHome {}
