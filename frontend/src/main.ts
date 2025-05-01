import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // ✅ Ajout explicite de HttpClient
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [provideHttpClient(), ...appConfig.providers] // ✅ Ajout de HttpClient
})
  .catch((err) => console.error(err));
