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
  constructor(private authService: AuthServiceService) {}
  logout() {
    this.authService.logout();
  }
}
