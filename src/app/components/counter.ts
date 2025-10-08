import {Component, model} from '@angular/core';

// Stateless
@Component({
  selector: 'app-counter',
  template: `
    <span [class.danger]="count() < 0">
      {{ count() }}
    </span>
    <button (click)="inc()">+</button>
    <button (click)="dec()">-</button>
  `,
  styles: `
    .danger {
      color: red;
      background: black;
    }
  `
})
export class Counter {

  count = model(0);

  inc() {
    this.count.update(n => n + 1);
  }

  dec() {
    this.count.update(n => n - 1);
  }
}
