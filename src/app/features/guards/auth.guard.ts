import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/common/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    const token = localStorage.getItem('accessToken');
    if (token) {
      return this.authService.validateToken(token).pipe(
        map(response => {
          console.log(response); 
          if (response === 'Token is valid.') {
            return true;
          } else {
            this.router.navigate(['/login']); 
            return false;
          }
        }),
        catchError(error => {
          console.error(error);
          this.router.navigate(['/login']);
          return of(false);
        })
      );
    } else {
      this.router.navigate(['/login']);
      return of(false);
    }
  }
}
