import {Component, effect, model, signal} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';

// Stateless
@Component({
  selector: 'app-counter',
  template: `
    <span [class.danger]="count() < 0">
      {{ count() }}
    </span>
    <button type="button" (click)="inc()" [disabled]="isDisabled()">+</button>
    <button type="button" (click)="dec()" [disabled]="isDisabled()">-</button>
  `,
  styles: `
    .danger {
      color: red;
      background: black;
    }
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Counter,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: Counter,
      multi: true
    }
  ]
})
export class Counter implements ControlValueAccessor, Validator {

  onChange = (n: number) => {
  }
  onTouched = () => {
  }

  isDisabled = signal(false);

  writeValue(n: number) {
    this.count.set(n);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled.set(isDisabled);
  }

  count = model(0);

  constructor() {
    effect(() => {
      this.onChange(this.count());
      this.onTouched();
    });
  }

  inc() {
    this.count.update(n => n + 1);
  }

  dec() {
    this.count.update(n => n - 1);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value > 2 ? null : { min2: true };
  }
}


