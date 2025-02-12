import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faBars, faTools, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importar iconos

import { routes } from './app.routes';

// Agregar iconos a la librería global de FontAwesome
library.add(faCode, faBars, faTools, faUsers, faEnvelope);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(FontAwesomeModule) // Se asegura que FontAwesomeModule está disponible
  ]
};
