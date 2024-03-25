import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5136/api/auth/validate';

  constructor(private http: HttpClient) {}

  validateToken(token: string) {
    return this.http.post<string>(
      'http://localhost:5000/api/auth/validate',
      token
    );
  }
}
