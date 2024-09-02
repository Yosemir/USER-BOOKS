import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { RouterModule } from '@angular/router';
import { User } from '../../../models/user.model';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterModule,MatTableModule,HttpClientModule,CommonModule,MatButtonModule,MatCardModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  users: User[] = []; // Aquí se almacenarán los usuarios

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers(); // Cargar usuarios cuando el componente se inicialice
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data; // Asigna los datos recibidos al array de usuarios
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers(); // Recargar la lista después de eliminar un usuario
    });
  }
}
