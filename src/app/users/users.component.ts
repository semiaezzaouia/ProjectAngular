import {Component, OnInit} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {MenuComponent} from "../menu/menu.component";
import {TopBarComponent} from "../top-bar/top-bar.component";
import {AuthService} from '../auth.service';
import {AuthServiceService} from '../services/auth-service.service';
import {User} from '../Model/User';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import { UserService } from '../services/userService';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    MenuComponent,
    TopBarComponent,
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit {
  usersData: any[] = [];

  constructor(private userService: UserService) {
  }


  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        console.log('Fetched users 1 ##:', data);
        this.usersData = data;
      },
      error => console.error('Error fetching users:', error)
    );
  }
}






