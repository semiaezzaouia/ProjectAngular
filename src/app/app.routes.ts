import { Routes } from '@angular/router';
import { Home2Component } from './home2/home2.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {MenuComponent} from './menu/menu.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {GeneralDashboardComponent} from './general-dashboard/general-dashboard.component';
import {FiltredDashboardComponent} from './filtred-dashboard/filtred-dashboard.component';
import {UsersComponent} from './users/users.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './services/auth.guard';
import {EditUserComponent} from './edit-user/edit-user.component';


export const routes: Routes = [
  { path: 'home2', component: Home2Component, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'topbar', component: TopBarComponent, canActivate: [AuthGuard]},
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard]},
  { path: 'generaldashboard', component: GeneralDashboardComponent, canActivate: [AuthGuard]},
  { path: 'filtreddashboard', component: FiltredDashboardComponent, canActivate: [AuthGuard]},
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'edit/:id', component: EditUserComponent}
    ]
  },
  { path: 'login', component: LoginComponent }, // Assurez-vous que le composant de connexion est également défini
  //{ path: 'forgot', component: ForgotPasswordComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirige vers login par défaut
  { path: '**', redirectTo: 'login' },  // Gestion des routes inconnues


];
