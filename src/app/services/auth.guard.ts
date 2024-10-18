import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import {AuthServiceService} from './auth-service.service';  // Ton service d'authentification

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthServiceService, private router: Router) {}

  // Méthode pour protéger les routes principales
  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  // Méthode pour protéger les sous-routes
  canActivateChild(): boolean {
    return this.canActivate();  // Utilise la même logique d'authentification
  }
}
