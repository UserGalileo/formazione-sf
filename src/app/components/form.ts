import {Component, inject} from '@angular/core';
import {FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {credentialsValidator} from '../validators/credentials.validator';
import {Counter} from './counter';
import {AddressForm} from './address-form';

@Component({
  selector: 'app-form',
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="firstName">
      <input type="text" formControlName="lastName">
      <app-counter formControlName="age" />

      <h2>Address</h2>

      <app-address-form formControlName="address" />

      <div formArrayName="phones">
        <h2>Phones</h2>
        <button type="button" (click)="addPhone()">Add Phone</button>

        @for (phone of profileForm.controls.phones.controls; let i = $index; track phone) {
          <div>
            <input type="text" [formControlName]="i">
            <button type="button" (click)="removePhone(i)">Remove Phone</button>
          </div>
        }

      </div>

      <button>Submit</button>
    </form>
  `,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    Counter,
    AddressForm
  ]
})
export class Form {

  fb = inject(NonNullableFormBuilder);

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    age: [0],
    address: {
      street: 'Via di Test',
      nr: '1'
    },
    phones: this.fb.array<FormControl<string | null>>([])
  }, {
    validators: [credentialsValidator('michele', 'stieven')],
  });

  constructor() {
    setTimeout(() => {
      this.profileForm.disable();
    }, 1000)
  }

  onSubmit() {
    this.profileForm.controls.firstName.disable();

    console.log(this.profileForm.getRawValue());
  }

  addPhone() {
    this.profileForm.controls.phones.push(
      this.fb.control('')
    )
  }

  removePhone(i: number) {
    this.profileForm.controls.phones.removeAt(i);
  }
}
