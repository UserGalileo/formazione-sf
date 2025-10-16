import {Component, signal} from '@angular/core';
import {EMPTY, interval, switchMap} from 'rxjs';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-on-off-switch',
  template: `
    <button (click)="status.set(status() === 'on' ? 'off' : 'on')">{{ status() }}</button>

    {{ data() }}
  `
})
export class OnOffSwitch {

  socket$ = interval(1000);

  status = signal<'on' | 'off'>('off');

  data = toSignal(toObservable(this.status).pipe(
    switchMap(status => {
      if (status === 'on') return this.socket$;
      return EMPTY;
    })
  ));
}


// Sto facendo una chiamata HTTP, quando arriva il segnale di farne un'altra. Cosa faccio?
// mergeMap: Eseguo tutte le chiamate in parallelo, l'ordine non conta.
// concatMap: Metto in coda la seconda richiesta.
// switchMap: Annullo la prima chiamata e passo alla seconda.
// exhaustMap: Annullo la nuova chiamata perché ero impegnato, mi hai infastidito.
