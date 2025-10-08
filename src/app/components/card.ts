import {Component, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="shadow">
      <ng-content select=".card-title" />
      <hr>
      <ng-content />
    </div>

    <div>

    </div>
  `,
  styles: `
    .shadow {
      padding: 1em;
      border: 1px solid black;
      border-radius: 4px;
    }
  `
})
export class Card {

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
