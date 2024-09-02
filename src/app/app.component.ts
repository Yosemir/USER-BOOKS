import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserFomComponent } from "./components/user-fom/user-fom.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/AuthService';
import { MatMenuModule } from '@angular/material/menu';
import { CategoryComponent } from "./components/category/category.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserFomComponent,
    UserListComponent,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    CommonModule,
    MatMenuModule,
    CategoryComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-book';

  constructor(private authService: AuthService, private router: Router) {}

  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }

  logout(): void {
    this.authService.logout(); // Llama al método de logout en AuthService
    this.router.navigate(['/login']); // Redirige al usuario a la página de login
  }

  
}
