import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'http://localhost:8088/test/auth';
  private tokenKey = 'authToken';
  constructor(private http: HttpClient, private  router:Router) {}

  // Méthode pour s'inscrire
  signup(data: { email: string, password: string, fullName: string }): Observable<any> {
    console.log("data",data)
    return this.http.post(`${this.apiUrl}/signup`, data);
  }

  // Méthode pour se connecter
  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Sauvegarder le token JWT dans le localStorage
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Récupérer le token JWT
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }



  // Check if the user is authenticated
  isAuthenticated(): boolean { return !!localStorage.getItem(this.tokenKey); }
   //Method for logout
  logout() { localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']); }



}
