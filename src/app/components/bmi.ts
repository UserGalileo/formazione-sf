import {Component, computed, signal,} from '@angular/core';

@Component({
  selector: 'app-bmi',
  template: `
    <label>
      Altezza
      <input type="number" step="0.01" [value]="h()" (input)="heightChange($event)">
    </label>

    <label>
      Peso
      <input type="number" [value]="w()" (input)="weightChange($event)">
    </label>

    {{ bmi() }}
  `,
})
export class Bmi {
  w = signal(0);
  h = signal(0);

  bmi = computed(() => {
    if (!this.h() || !this.w()) {
      return '-';
    }
    const n = this.w() / this.h() ** 2;
    if (n < 18.5) return 'sottopeso';
    if (n < 25) return 'normopeso';
    return 'sovrappeso';
  });

  heightChange(e: Event) {
    this.h.set(+(e.target as HTMLInputElement).value || 0);
  }

  weightChange(e: Event) {
    this.w.set(+(e.target as HTMLInputElement).value || 0);
  }

}
