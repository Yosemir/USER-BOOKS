import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFomComponent } from './components/user-fom/user-fom.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from '../services/AuthGuard ';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige a login por defecto
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },  // Protege la ruta
  { path: 'users/new', component: UserFomComponent, canActivate: [AuthGuard] },  // Protege la ruta
  { path: 'users/edit/:id', component: UserFomComponent, canActivate: [AuthGuard] },   // Protege la ruta
  { path: 'category', component: CategoryComponent, canActivate: [AuthGuard] },  // Protege la ruta
  { path: 'category/new', component: CategoryComponent, canActivate: [AuthGuard] },  // Protege la ruta
  { path: 'category/edit/:id', component: CategoryComponent, canActivate: [AuthGuard] },  // Protege la ruta
  { path: '**', redirectTo: '/login' },  // Redirige cualquier otra ruta desconocida a login
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
