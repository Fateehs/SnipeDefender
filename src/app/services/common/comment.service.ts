import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl = 'http://localhost:5136';

  constructor(private http: HttpClient) {}

  getPlayerCommentsById(playerId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/Comment/${playerId}`);
  }
}
