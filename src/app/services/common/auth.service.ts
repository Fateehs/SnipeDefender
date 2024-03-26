import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5136';
  private jwtHelper: JwtHelperService;

  constructor(private http: HttpClient, private router: Router) {
    this.jwtHelper = new JwtHelperService();
  }

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post<any>(`${this.apiUrl}/api/auth/login`, loginData).pipe(
      map(response => {
        const token = response.token;
        localStorage.setItem('token', token);
        this.router.navigate(['/homepage']);
        return response;
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
