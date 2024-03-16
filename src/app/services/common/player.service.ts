import { Injectable } from '@angular/core';
import { Player } from '../../entities/player';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private apiUrl = 'http://localhost:5136';

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}/api/players`);
  }

  fetchUserDetails(playerId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/players/${playerId}`);
  }
}
