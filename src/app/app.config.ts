import {
  ApplicationConfig, InjectionToken, isDevMode,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';
import {Logger, OldLogger} from './services/logger';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {provideState, provideStore} from '@ngrx/store';
import {counterReducer} from './store/counter/counter.reducer';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideEffects} from '@ngrx/effects';
import * as usersEffects from './store/users/users.effects';
import {usersFeature} from './store/users/users.reducer';
import {provideRouterStore, routerReducer} from '@ngrx/router-store';
export const APP_CONFIG = new InjectionToken<Record<string, any>>('app config');

const config: Record<string, any> = {
  'apiUrl': '/api'
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch()),
    { provide: Logger, useClass: OldLogger },
    { provide: APP_CONFIG, useValue: config },
    provideStore({
      counter: counterReducer,
      router: routerReducer
    }, {
      runtimeChecks: {
        strictActionSerializability: true,
        strictActionTypeUniqueness: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictStateImmutability: true
      }
    }),
    provideState(usersFeature),
    provideEffects(usersEffects),
    provideRouterStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode()
    })
  ]
};
