import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthServiceService} from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  login() {
    const credentials = { email: this.email, password: this.password };
    this.authService.login(credentials).subscribe(
      (response) => {
        this.authService.saveToken(response.token);  // Sauvegarder le token
        this.router.navigate(['/generaldashboard']);  // Rediriger vers la page 1
      },
      (error) => {
        console.error('Erreur de connexion', error);
        alert('Erreur de connexion : ' + error.message || 'Veuillez vérifier vos identifiants.');
      }
    );
  }
}
