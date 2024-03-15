import { Component } from '@angular/core';
import { UserService } from '../../services/common/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.login(this.username, this.password)
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          // Yönlendirme veya diğer işlemleri burada yapabilirsiniz.
          console.log('Giriş başarılı');
          this.router.navigate(['/homepage']);
        },
        error => {
          console.error('Giriş başarısız:', error); // Hata durumunda konsola hata yazdırın.
          // Hata işleme kodlarını buraya ekleyebilirsiniz.
        }
      );
  }
}