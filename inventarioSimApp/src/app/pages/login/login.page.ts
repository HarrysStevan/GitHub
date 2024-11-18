import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  login() {
    this.apiService.login(this.email, this.password).subscribe(
      (response: any) => {
        // Tipo explícito para 'response'
        if (response.success) {
          localStorage.setItem('userRole', response.userRole); // Guardar rol en localStorage
          if (response.userRole === 'admin') {
            this.router.navigateByUrl('/dashboard/admin');
          } else {
            this.router.navigateByUrl('/dashboard/user');
          }
        } else {
          this.errorMessage = response.message;
          alert(this.errorMessage);
        }
      },
      (error: any) => {
        // Tipo explícito para 'error'
        console.error('Error al conectarse con el API:', error);
        alert('Error al conectarse con el servidor.');
      }
    );
  }
}
