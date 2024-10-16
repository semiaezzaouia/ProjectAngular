import {Component, OnInit} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {MenuComponent} from "../menu/menu.component";
import {TopBarComponent} from "../top-bar/top-bar.component";
import {AuthService} from '../auth.service';
import {AuthServiceService} from '../services/auth-service.service';
import {User} from '../Model/User';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    FooterComponent,
    MenuComponent,
    TopBarComponent,
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: User[] = [];

  constructor(private userService: AuthServiceService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log("data", data);
    });
  }
}
