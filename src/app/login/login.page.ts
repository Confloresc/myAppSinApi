import { Component } from '@angular/core';
import { Usuario } from 'usuario.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user: Usuario = new Usuario();
  isPasswordValid: boolean = false;
  validEmailPattern: string = '^(p@duoc.cl|a@duoc.cl)$';

  constructor(private router: Router, private authService: AuthenticationService) {}

  validatePassword() {
    this.isPasswordValid = this.authService.loginAuth(this.user.email, this.user.password);
  }

  login() {
    console.log('Iniciando sesión con:', this.user.email, this.user.password);
    
    if (this.isPasswordValid) {
      if (this.user.email === 'p@duoc.cl') {
        this.router.navigate(['/menuprof'], {
          queryParams: {
            nombre: 'Sebastian Martinez',
            correoElectronico: this.user.email,
          },
        });
      } else if (this.user.email === 'a@duoc.cl') {
        this.router.navigate(['/scanner'], {
          queryParams: {
            nombre: 'Laura Mejia',
            correoElectronico: this.user.email,
          },
        });
      }
    } else {
      // Las credenciales son incorrectas, muestra un mensaje de error
    }
  }
}
