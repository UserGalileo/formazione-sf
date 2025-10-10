import {
  ApplicationConfig, InjectionToken,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';
import {Logger, OldLogger} from './services/logger';
import {provideHttpClient, withFetch} from '@angular/common/http';

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
    { provide: APP_CONFIG, useValue: config }
  ]
};
