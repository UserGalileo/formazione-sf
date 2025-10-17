import {Component, inject} from '@angular/core';
import {httpResource} from '@angular/common/http';
import {User} from '../models/user';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Store} from '@ngrx/store';
import {usersFeature} from '../store/users/users.reducer';
import {usersActions} from '../store/users/users.actions';

@Component({
  selector: 'app-users',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  template: `
    <ul>
      @for (user of users() || []; track user.id) {
        <li><a [routerLink]="'/users/' + user.id">{{ user.name }}</a></li>
      }
    </ul>

    <hr>

    <router-outlet />
  `
})
export class Users {

  store = inject(Store);

  users = this.store.selectSignal(usersFeature.selectList);

  ngOnInit() {
    this.store.dispatch(usersActions.usersPageEnter());
  }

}
