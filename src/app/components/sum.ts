import {Component, input, Input, SimpleChanges} from '@angular/core';

// Stateless (Dumb)
@Component({
  selector: 'app-sum',
  template: `
    {{ a() + b() }}
  `
})
export class Sum {
  a = input(1);
  b = input(2);
}
