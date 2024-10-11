import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { FormsModule } from '@angular/forms'; // Importer FormsModule pour ngModel

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ajouter FormsModule ici pour ngModel
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  isAdmin = false; // Exemple de propriété pour vérifier si l'utilisateur est admin
  newMember = { name: '', role: '' }; // Nouveau membre
  newMemberRequest = { firstName: '', lastName: '', address: '', phone: '' }; // Données du formulaire de devenir membre
  members = [{ name: 'John Doe', role: 'Membre' }]; // Liste des membres existants

  // Méthode pour ajouter un membre (uniquement pour les admins)
  addMember() {
    if (this.isAdmin) {
      this.members.push({ ...this.newMember });
      this.newMember = { name: '', role: '' }; // Réinitialiser le formulaire
    }
  }

  // Méthode pour traiter la demande de devenir membre
  becomeMember() {
    // Pour l'instant, on affiche simplement les informations soumises
    alert(`Demande reçue : ${this.newMemberRequest.firstName} ${this.newMemberRequest.lastName}, Adresse: ${this.newMemberRequest.address}, Téléphone: ${this.newMemberRequest.phone}`);
    // Logique pour gérer l’inscription des membres
    this.newMemberRequest = { firstName: '', lastName: '', address: '', phone: '' }; // Réinitialiser le formulaire
  }
}
