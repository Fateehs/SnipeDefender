import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../entities/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:5136';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/api/users`);
  }

  login(username: string, password: string) {
    const loginData = { username, password };
    return this.http.post<any>(`${this.apiUrl}/api/users/login`, loginData);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`/api/Users/${userId}`);
  }
}
