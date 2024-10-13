// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false; // Simule l'état de connexion

  isLoggedIn() {
    // Logique pour vérifier si l'utilisateur est connecté
    // Cela peut inclure la vérification d'un token dans le localStorage, etc.
    return this.loggedIn;
  }

  login() {
    // Logique de connexion
    this.loggedIn = true;
  }

  logout() {
    // Logique de déconnexion
    this.loggedIn = false;
  }
}
