import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule], // ✅ Asegura que los enlaces funcionen
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services = [
    {
      title: "💻 Desarrollo Web",
      description: "Creamos páginas web modernas y optimizadas con Angular y Tailwind CSS.",
    },
    {
      title: "🤖 IA para Negocios",
      description: "Implementamos inteligencia artificial para automatización, predicción y análisis de datos.",
    },
    {
      title: "🔍 Optimización SEO",
      description: "Hacemos que tu negocio sea visible en Google con estrategias de posicionamiento.",
    },
    {
      title: "🌱 Hosting Eco-Friendly",
      description: "Servidores con energía renovable, reduciendo la huella de carbono en cada proyecto.",
    },
    {
      title: "⚙️ Automatización Sostenible",
      description: "Optimizamos procesos empresariales con tecnología de bajo consumo energético.",
    },
    {
      title: "🌎 Digitalización Responsable",
      description: "Implementamos soluciones digitales que reducen el uso de papel y materiales físicos.",
    }
  ];
}
