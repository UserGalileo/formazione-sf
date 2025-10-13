import {Component, effect, inject, signal} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  TouchedChangeEvent, ValueChangeEvent
} from '@angular/forms';

@Component({
  selector: 'app-address-form',
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <div [formGroup]="address">
      <input type="text" formControlName="street">
      <input type="text" formControlName="nr">
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddressForm,
      multi: true
    }
  ]
})
export class AddressForm implements ControlValueAccessor {

  onChange = (obj: any) => {}
  onTouched = () => {}
  isDisabled = signal(false);

  fb = inject(NonNullableFormBuilder);

  address = this.fb.group({
    street: '',
    nr: ''
  });

  constructor() {
    this.address.events.subscribe(event => {
      if (event instanceof TouchedChangeEvent && event.touched) {
        this.onTouched();
      }
      if (event instanceof ValueChangeEvent) {
        this.onChange(event.value);
      }
    });

    effect(() => {
      if (this.isDisabled()) {
        this.address.disable();
      } else {
        this.address.enable();
      }
    });
  }

  writeValue(obj: any) {
    this.address.setValue(obj);
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
}

