import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importation de CommonModule
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule], // Assure-toi d'importer CommonModule ici
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: any[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      (data) => {
        this.items = data;
        console.log(this.items); // Vérifie les données
      },
      (error) => {
        console.error('Erreur lors de la récupération des éléments', error);
      }
    );
  }
}
