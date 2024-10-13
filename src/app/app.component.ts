import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service'; // Service d'authentification
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { GeneralDashboardComponent } from "./general-dashboard/general-dashboard.component";
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, TopBarComponent, HomeComponent, LoginComponent, GeneralDashboardComponent,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isAuthenticated = false;
  title = 'project_semia_angular';
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.isAuthenticated = this.authService.isLoggedIn(); // Vérifier si l'utilisateur est connecté
  }

}








