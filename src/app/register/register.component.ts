import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthServiceService} from '../services/auth-service.service';
import {Router} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,HttpClientModule
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

}
