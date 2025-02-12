import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FontAwesomeModule], // 🔹 Se importa FontAwesomeModule para los iconos
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'] // 🔹 Se corrige `styleUrl` -> `styleUrls`
})
export class ServicesComponent {}
