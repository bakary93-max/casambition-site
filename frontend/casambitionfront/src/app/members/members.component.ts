import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importer CommonMod

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {

}
