import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
standalone:false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  sendEmail(event: Event) {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_ux3l0wc',   // e.g., service_xxxx
        'template_1fce69a',  // e.g., template_xxxx
        event.target as HTMLFormElement,
        '1FDz_JPweI5EgEM1z'    // e.g., sdfsdf12345
      )
      .then(() => {
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Email sending error:', error);
        alert('Failed to send email.');
      });
  }

}
