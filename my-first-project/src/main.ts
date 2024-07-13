import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import routeConfig from './app/routes';

// Ensure the `provideProtractorTestingSupport` function is defined or remove it if it's not needed.
bootstrapApplication(AppComponent, {
  providers: [
    //  provideProtractorTestingSupport(), // Uncomment or define if needed
    provideRouter(routeConfig)
  ]
}).catch(err => console.error(err));
