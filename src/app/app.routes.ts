import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServicesComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // 🔹 Redirigir cualquier otra ruta al home
];
