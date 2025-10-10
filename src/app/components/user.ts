import {Component, inject, input} from '@angular/core';
import {httpResource} from '@angular/common/http';
import {User as IUser} from '../models/user';
import {RouterLink} from '@angular/router';
import {JsonPipe} from '@angular/common';

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

    {{ user.value() | json }}
  `
})
export class User {

  userId = input.required<string>();

  user = httpResource<IUser>(() => `https://jsonplaceholder.typicode.com/users/${this.userId()}`);

}
