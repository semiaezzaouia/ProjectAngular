import { Routes } from '@angular/router';
import { Home2Component } from './home2/home2.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';


export const routes: Routes = [
    { path: 'home2', component: Home2Component },
    { path: 'home', component: HomeComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }, // Assurez-vous que le composant de connexion est également défini
    { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirige vers login par défaut
    { path: '**', redirectTo: 'login' },  // Gestion des routes inconnues


];
