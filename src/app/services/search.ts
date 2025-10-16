import {Injectable} from '@angular/core';
import {delay, of} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {

  // http = inject(HttpClient)

  getSuggestions(term: string) {
    // return this.http.get('/search?term=' + term);

    return of([
      'Suggestion 1 for ' + term + '...',
      'Suggestion 2 for ' + term + '...',
      'Suggestion 3 for ' + term + '...',
    ]).pipe(
      delay(1000),
    )
  }
}
