import { Component } from '@angular/core';
import { ItemListComponent } from './item-list/item-list.component'; // Importer ItemListComponent
import { FooterComponent } from './footer/footer.component'; // Importer FooterComponent
import { RouterModule } from '@angular/router'; // Importer RouterModule

@Component({
  selector: 'app-root',
  standalone: true, // Indiquer que c'est un composant autonome
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ItemListComponent, FooterComponent, RouterModule] // Ajouter FooterComponent ici
})
export class AppComponent {
  title = 'Mon application Angular';
}
