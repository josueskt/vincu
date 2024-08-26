import { Component,  OnInit, inject } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService } from '../roles/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  implements OnInit{
  username = '';
  password = '';
  showPassword: boolean = false;
  private aunt = inject(LoginService);
  private router = inject(Router);
  private authService = inject(AuthService);

  ngOnInit() {
    const userInfo = this.authService.getUserInfo();
    if (userInfo) {
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    }
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    this.aunt.login(this.username, this.password).subscribe({
      
     next: (response) => {
        // Maneja la respuesta del servidor aquí (por ejemplo, almacena el token)
        if (response.message) {
        alert(response.message)
        } else if (response.token) {
          localStorage.setItem('token', response.token);
          this.username = '';
          this.password = '';
          // Por ejemplo, navegar a la ruta '/otra-ruta'
          this.router.navigate(['/home']).then(() => {
            window.location.reload();
          });
        } else {
          console.error('Respuesta del servidor inesperada:', response);
        }
      },
      error:(e) =>  console.error('Error en la autenticación:', e)
    }
    );
  }
  login_out() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
