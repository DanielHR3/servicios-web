import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  redirectToContact() {
    window.location.href = "/contacto"; // 🔹 Redirige manualmente a la página de contacto
  }
}
