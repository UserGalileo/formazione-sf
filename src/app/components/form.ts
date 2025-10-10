import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
    <input type="text" [formControl]="control">
    <hr>
    Dirty: {{ control.dirty }}
    <hr>
    <button (click)="control.markAsPristine()">Mark as pristine</button>
  `,
  imports: [
    ReactiveFormsModule
  ]
})
export class Form {

  control = new FormControl<string>('');

  canLeave() {
    if (this.control.pristine) return true;
    return confirm('Hai delle modifiche non salvate, vuoi lasciare la pagina?');
  }

}
