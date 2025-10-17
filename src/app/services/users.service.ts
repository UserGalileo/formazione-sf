import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Injectable({ providedIn: 'root' })
export class UsersService {

  http = inject(HttpClient);

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: string) {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/' + id);
  }
}

