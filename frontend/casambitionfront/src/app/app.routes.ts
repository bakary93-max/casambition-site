import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },         // Page d'accueil
  { path: 'members', component: MembersComponent }, // Page des membres
  { path: 'projects', component: ProjectsComponent }, // Page des projets
  { path: 'contact', component: ContactComponent },  // Page de contact
];
