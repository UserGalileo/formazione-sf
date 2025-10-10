import {Component, signal} from '@angular/core';
import {User} from '../models/user';
import {httpResource} from '@angular/common/http';
import {Post} from '../models/post';

@Component({
  selector: 'app-users-list',
  template: `
    <ul>
      @for (user of users.value() || []; track user.id) {
        <li
          (click)="onUserClick(user.id)"
          [style.font-weight]="selectedUserId() === user.id ? 'bold' : 'normal'"
        >{{ user.name }}</li>
      }
    </ul>
    <hr>
    <ul>
      @for (post of posts.value() || []; track post.id) {
        <li>{{ post.title }}</li>
      }
    </ul>
  `
})
export class UsersList {

  selectedUserId = signal<User['id'] | null>(null);

  users = httpResource<User[]>(() =>  `https://jsonplaceholder.typicode.com/users`);
  posts = httpResource<Post[]>(() => {
    if (this.selectedUserId()) return `https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUserId()}`;
    return undefined;
  });

  onUserClick(id: User['id']) {
    this.selectedUserId.update(userId => userId === id ? null : id);
  }
}
