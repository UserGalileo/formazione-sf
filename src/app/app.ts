import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Form} from './components/form';
@Component({
  selector: 'app-root',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/form">Form</a></li>
        <li><a routerLink="/profile">Profile</a></li>
        <li><a routerLink="/admin">Admin</a></li>
        <li><a routerLink="/users">Users</a></li>
      </ul>
    </nav>

    <router-outlet />
  `,
  imports: [
    RouterOutlet,
    RouterLink,
    Form,
  ]
})
export class App {




}
