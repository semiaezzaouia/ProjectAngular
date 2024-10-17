import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthServiceService} from '../services/auth-service.service';
import {Router, RouterLink} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from '../footer/footer.component';
import {MenuComponent} from '../menu/menu.component';
import {TopBarComponent} from '../top-bar/top-bar.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule, HttpClientModule, RouterLink, FooterComponent, MenuComponent, TopBarComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  fullName: string = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  signup() {
    const data = { email: this.email, password: this.password, fullName: this.fullName };
    this.authService.signup(data).subscribe(
      (response) => {
        console.log('Inscription réussie');
        this.router.navigate(['/login']);  // Rediriger vers la page de connexion
      },
      (error) => {
        console.error('Erreur lors de l\'inscription', error);
      }
    );
  }
  exit() {
    this.router.navigate(['/users']); // Rediriger vers la liste des utilisateurs
  }

}
