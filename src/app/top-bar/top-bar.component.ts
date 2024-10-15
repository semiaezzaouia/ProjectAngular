import { Component } from '@angular/core';
import {AuthServiceService} from '../services/auth-service.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  user:any;
  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void{ this.authService.getAuthenticatedUser().subscribe( (data) =>{ this.user= data;
    console.log('données user: ',data);
    }, (error) =>
  { console.error('Failed to fetch user data', error); } ); }

    logout() {
    this.authService.logout();
  }


}
