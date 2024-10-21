import {Component, OnInit} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {MenuComponent} from "../menu/menu.component";
import {TopBarComponent} from "../top-bar/top-bar.component";
import {AuthService} from '../auth.service';
import {AuthServiceService} from '../services/auth-service.service';
import {User} from '../Model/User';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import { UserService } from '../services/userService';
import {RegisterComponent} from '../register/register.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    MenuComponent,
    TopBarComponent,
    RouterLink,
    RouterOutlet,
    RegisterComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit {
  usersData: any[] = [];

  constructor(private userService: UserService, private router: Router, private changeDetector: ChangeDetectorRef) {}


  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        console.log('Fetched users 1 ##:', data);
        this.usersData = data;
      },
      error => console.error('Error fetching users:', error)
    );
  }

  exit() {
    this.router.navigate(['/users']); // Rediriger vers la liste des utilisateurs
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        console.log('Utilisateur supprimé avec succès');
        this.usersData = this.usersData.filter(user => user.id !== userId); // Met à jour la liste localement
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/users']);
        });
      },
      error: (err) => {
        console.error('Erreur lors de la suppression de l\'utilisateur', err);
      }
    });
  }

  editUser(userId: number): void {
    this.router.navigate(['/users/edit', userId]); // Navigue vers le composant d'édition avec l'ID de l'utilisateur
  }

}






