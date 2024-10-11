// src/app/app.component.ts

import { Component } from '@angular/core';
import { ItemListComponent } from './item-list/item-list.component'; // Importer ItemListComponent
import { RouterModule } from '@angular/router'; // Importer RouterModule

@Component({
  selector: 'app-root',
  standalone: true, // Indiquer que c'est un composant autonome
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ItemListComponent, RouterModule] // Ajouter ItemListComponent ici
})
export class AppComponent {
  title = 'Mon application Angular';
}
