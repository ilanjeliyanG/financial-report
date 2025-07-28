import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
};
