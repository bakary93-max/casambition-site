import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api'; // Remplace par l'URL de ton backend

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/`, { username, password });
  }

  setUserAdmin(isAdmin: boolean): void {
    localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
  }

  isUserAdmin(): boolean {
    const isAdmin = localStorage.getItem('isAdmin');
    return isAdmin ? JSON.parse(isAdmin) : false; // Retourne false par défaut
  }

  logout() {
    localStorage.removeItem('isAdmin'); // Retire le statut d'admin lors de la déconnexion
  }
}
