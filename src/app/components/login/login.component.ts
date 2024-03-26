import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/common/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        localStorage.setItem('token', response.authToken);
        this._snackBar.open('Successfully logged in!', 'Close', {
          duration: 2000,
          verticalPosition: 'bottom',
        });
      },
      (error) => {
        this._snackBar.open('Username or password is incorrect', 'Try again', {
          duration: 2000,
          verticalPosition: 'bottom',
        });
      }
    );
  }
}
