import { Routes } from '@angular/router';
import { Home2Component } from './home2/home2.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {MenuComponent} from './menu/menu.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {GeneralDashboardComponent} from './general-dashboard/general-dashboard.component';
import {FiltredDashboardComponent} from './filtred-dashboard/filtred-dashboard.component';
import {UsersComponent} from './users/users.component';


export const routes: Routes = [
    { path: 'home2', component: Home2Component },
    { path: 'home', component: HomeComponent},
    { path: 'topbar', component: TopBarComponent},
    { path: 'menu', component: MenuComponent},
    { path: 'generaldashboard', component: GeneralDashboardComponent},
    { path: 'filtreddashboard', component: FiltredDashboardComponent},
    { path: 'users', component: UsersComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }, // Assurez-vous que le composant de connexion est également défini
    { path: 'forgot', component: ForgotPasswordComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirige vers login par défaut
    { path: '**', redirectTo: 'login' },  // Gestion des routes inconnues


];
