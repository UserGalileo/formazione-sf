import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SearchService} from '../services/search';
import {toSignal} from '@angular/core/rxjs-interop';
import {debounceTime, distinctUntilChanged, map, Observable, pipe, switchMap} from 'rxjs';

function liveSearch<T>(time: number, callback: (term: string) => Observable<T>) {
  return pipe(
    map((term: string) => term.toLowerCase()),
    debounceTime(time),
    distinctUntilChanged(),
    switchMap(callback)
  )
}

@Component({
  selector: 'app-search-form',
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <input type="text" [formControl]="search" placeholder="Search..."><br>

    <ul>
      @for (suggestion of suggestions(); track suggestion) {
        <li>{{ suggestion }}</li>
      }
    </ul>
  `
})
export class SearchForm {
  searchService = inject(SearchService);

  search = new FormControl('', { nonNullable: true});

  suggestions = toSignal(this.search.valueChanges.pipe(
    liveSearch(500, term => this.searchService.getSuggestions(term))
  ));
}

