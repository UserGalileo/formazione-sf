/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  LineController,
  LineElement,
  PointElement
} from 'chart.js';

Chart.register([
  CategoryScale,
  LineController,
  BarController,
  LineElement,
  LinearScale,
  PointElement,
  BarElement
]);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
