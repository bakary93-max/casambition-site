import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule] // Importer FormsModule pour utiliser ngModel
})
export class LoginComponent {
  username: string = ''; // Ajout du champ username
  password: string = ''; // Ajout du champ password
  isAdmin: boolean = false; // Option pour le statut admin

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        this.authService.setUserAdmin(response.isAdmin); // Stocke le statut admin
        if (response.isAdmin) {
          this.router.navigate(['/members']);
        } else {
          alert('Connexion réussie, mais vous n\'êtes pas admin.');
        }
      },
      (error) => {
        alert('Échec de la connexion. Vérifiez vos identifiants.');
      }
    );
  }
}
