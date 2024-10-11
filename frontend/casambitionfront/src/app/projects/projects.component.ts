import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importer CommonModule

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], // Ajouter CommonModule ici
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  isAdmin = false; // Simuler la vérification du rôle de l'utilisateur

  constructor() {
    // Simuler la connexion d'un admin pour le test, dans la vraie application
    // Il faudra vérifier le rôle depuis un service d'authentification.
    this.isAdmin = this.checkIfAdmin();
  }

  checkIfAdmin(): boolean {
    // Logique pour vérifier si l'utilisateur est un admin
    // Remplacer cette partie par une vraie vérification d'authentification
    return true; // Simuler un utilisateur admin
  }

  addProject() {
    // Logique pour ajouter un projet
    console.log("Ajout d'un projet par un administrateur");
  }
}
