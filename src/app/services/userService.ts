import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../Model/User';



@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'http://localhost:8088/test/api/users'; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteUser(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateUser(id: number, userDetails: User): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<User>(url, userDetails);
  }
  getUserById(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }

}

