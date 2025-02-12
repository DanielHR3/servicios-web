import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  sendMessage() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;

    if (!name || !email || !message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Mensaje formateado con saltos de línea para mayor legibilidad
    const formattedMessage = `👋 Hola, mi nombre es *${encodeURIComponent(name)}*.%0A📧 Mi correo es: *${encodeURIComponent(email)}*.%0A📝 Mi mensaje:%0A${encodeURIComponent(message)}`;

    // Enlace directo a WhatsApp con el mensaje formateado
    const whatsappURL = `https://wa.me/5217715687814?text=${formattedMessage}`;
    
    window.open(whatsappURL, "_blank");
  }
}
