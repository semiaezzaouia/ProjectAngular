import { Component,  OnInit } from '@angular/core';
import {AuthServiceService} from '../services/auth-service.service';


@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent implements OnInit{
  user: any = { firstName: '', lastName: '' };

  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe(
      (response) => {
        console.log('Full API response:', response); // Log the full response
        this.user = response;
        console.log("Data user auth:", this.user); // Check what is assigned to user
      },
      (error) => {
        console.error('Failed to fetch user data', error);
      }
    );
  }


    logout() {
    this.authService.logout();
  }


}
