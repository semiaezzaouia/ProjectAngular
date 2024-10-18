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
  firstName: string = '';
  lastName: string = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  signup() {
    const data = { email: this.email, password: this.password, firstName: this.firstName, lastName: this.lastName };
    this.authService.signup(data).subscribe(
      (response) => {
        console.log('Inscription réussie');
        //this.router.navigate(['/users']);  // Rediriger vers la page de connexion
        window.location.href = '/users';
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
