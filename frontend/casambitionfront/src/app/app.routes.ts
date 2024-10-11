import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component'; // Importer le composant de connexion
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },         // Page d'accueil
  { path: 'members', component: MembersComponent }, // Page des membres
  { path: 'projects', component: ProjectsComponent }, // Page des projets
  { path: 'contact', component: ContactComponent },  // Page de contact
  { path: 'login', component: LoginComponent }, // Route pour le composant de connexion
  { path: 'footer', component: FooterComponent }
];
