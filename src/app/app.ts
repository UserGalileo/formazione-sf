import {Component} from '@angular/core';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {Exponential} from './pipes/exponential';


@Component({
  selector: 'app-root',
  template: `
    {{ today | date:'hh:mm' }}

    {{ amount | currency:'EUR' }}

    {{ 2 | exponential:3 }}
  `,
  imports: [
    DatePipe,
    CurrencyPipe,
    Exponential
  ]
})
export class App {

  today = new Date();

  amount = 20;
}
