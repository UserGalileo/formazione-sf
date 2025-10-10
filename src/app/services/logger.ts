import {Injectable} from '@angular/core';


export abstract class Logger {

  log(msg: string): void {}
}

@Injectable({ providedIn: 'root' })
export class OldLogger implements Logger {

  constructor() {
    console.log('old constructor')
  }

  log(msg: string) {
    console.log(msg);
  }
}

@Injectable({ providedIn: 'root' })
export class BetterLogger implements Logger {

  constructor() {
    console.log('better constructor')
  }

  log(msg: string) {
    console.log(msg);
  }
}
