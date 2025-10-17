import {Component, inject, input} from '@angular/core';
import {httpResource} from '@angular/common/http';
import {User as IUser} from '../models/user';
import {RouterLink} from '@angular/router';
import {JsonPipe} from '@angular/common';
import {Store} from '@ngrx/store';
import {usersActions} from '../store/users/users.actions';
import {usersFeature} from '../store/users/users.reducer';

@Component({
  selector: 'app-user',
  imports: [
    JsonPipe,
    RouterLink
  ],
  template: `
    User {{ userId() }}

    <button [routerLink]="'/users/' + (+userId() + 1)"> > </button>

    <hr>

    {{ user() | json }}

  `
})
export class User {

  store = inject(Store);

  userId = input.required<string>();

  user = this.store.selectSignal(usersFeature.selectCurrentUser);

  ngOnInit() {
    this.store.dispatch(usersActions.userPageEnter());
  }

}
