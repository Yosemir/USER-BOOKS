import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  createUser(user: User): Observable<User> {
    // Lógica adicional si es necesario
    return this.apiService.createUser(user);
  }

  getAllUsers(): Observable<User[]> {
    // Lógica adicional si es necesario
    return this.apiService.getAllUsers();
  }

  updateUser(id: number, user: User): Observable<User> {
    // Lógica adicional si es necesario
    return this.apiService.updateUser(id, user);
  }

  deleteUser(id: number): Observable<void> {
    // Lógica adicional si es necesario
    return this.apiService.deleteUser(id);
  }

  getUserById(id: number): Observable<User> {
    // Lógica adicional si es necesario
    return this.apiService.getUserById(id);
  }

}
