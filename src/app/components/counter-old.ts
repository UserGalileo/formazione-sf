import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-counter-old',
  template: `
    {{ count() }}
  `
})
export class CounterOld {

  // Tutti gli stati diventano Signal (cambia, ed è nel template)
  count = signal(0);

  doubleCount = computed(() => this.count() * 2);

  constructor() {
    setInterval(() => {
      this.count.update(n => n + 1);
    }, 1000);
  }
}
