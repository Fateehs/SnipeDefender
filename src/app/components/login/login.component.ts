import { Component } from '@angular/core';
import { UserService } from '../../services/common/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  onSubmit() {
    this.userService.login(this.username, this.password).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this._snackBar.open('Successfully logged in!', 'Close', {
          duration: 2000,
          verticalPosition: 'bottom',
        });
        this.router.navigate(['/homepage']);
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
