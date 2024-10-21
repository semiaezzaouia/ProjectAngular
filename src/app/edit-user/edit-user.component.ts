import { Component, OnInit } from '@angular/core';
import {ERole, User} from '../Model/User';
import { UserService } from '../services/userService';
import { Router } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {

  ERole = ERole;

  selectedUser: User = {
    id: 0,                     // Assigner un 0 (ou une autre valeur numérique) pour l'ID par défaut
    firstName: '',              // Chaîne vide pour les chaînes
    lastName: '',
    email: '',
    password: '',
    role: ERole.USER            // Assigner un rôle par défaut (par exemple USER ou ADMIN)
  };

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(userId).subscribe(user => {
      this.selectedUser = user; // Remplit les données utilisateur
    });
  }

  updateUser(): void {
    const userId = this.selectedUser.id;
    this.userService.updateUser(userId, this.selectedUser).subscribe({
      next: (updatedUser) => {
        console.log('Utilisateur mis à jour avec succès', updatedUser);
        // Optionnel : rediriger ou mettre à jour d'autres éléments
        //this.router.navigate(['/users']);
        window.location.href = '/users';
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour de l\'utilisateur', err);
      }
    });
  }

  exit() {
    this.router.navigate(['/users']); // Rediriger vers la liste des utilisateurs
  }
}
