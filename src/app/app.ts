import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {Store} from '@ngrx/store';
import {decrementButtonPressed, incrementButtonPressed} from './store/counter/counter.actions';
import {selectCount, selectCountValue} from './store/counter/counter.selectors';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/form">Form</a></li>
        <li><a routerLink="/todos">Todos</a></li>
        <li><a routerLink="/profile">Profile</a></li>
        <li><a routerLink="/admin">Admin</a></li>
        <li><a routerLink="/users">Users</a></li>
      </ul>
    </nav>

    <router-outlet /><hr>

  `,
  imports: [
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule,
  ]
})
export class App {

  store = inject(Store);



}
