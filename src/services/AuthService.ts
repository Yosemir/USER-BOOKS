import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiUrlLogin = `${environment.apiUrlLogin}`;

    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<any> {
      const url = `${this.apiUrlLogin}/api/auth/login`;
      return this.http.post<any>(url, { username, password }).pipe(
        tap(response => {
          this.saveToken(response.token);
        })
      );
    }
  
    saveToken(token: string): void {
      localStorage.setItem('token', token);
    }
  
    getToken(): string | null {
      return localStorage.getItem('token');
    }
  
    isLoggedIn(): boolean {
      return this.getToken() !== null;
    }
  
    logout(): void {
      localStorage.removeItem('token');
    }

}
