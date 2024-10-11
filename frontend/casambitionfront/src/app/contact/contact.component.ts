import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Pour utiliser ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.name && this.email && this.message) {
      const contactData = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      // Envoi des données au backend
      this.http.post('http://127.0.0.1:8000//api/contact/', contactData).subscribe({
        next: (response) => {
          console.log('Message envoyé', response);
          alert('Votre message a bien été envoyé !');
          this.name = '';
          this.email = '';
          this.message = '';
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi du message', error);
          alert('Une erreur est survenue lors de l\'envoi du message.');
        }
      });
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
}
