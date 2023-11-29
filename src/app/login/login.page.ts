// import { Component } from '@angular/core';
// import { Usuario } from 'usuario.model';
// import { Router } from '@angular/router';
// import { AuthenticationService } from '../services/authentication.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })
// export class LoginPage {
//   user: Usuario = new Usuario();
//   isPasswordValid: boolean = false;
//   validEmailPattern: string = '^(p@duoc.cl|a@duoc.cl)$';

//   constructor(private router: Router, private authService: AuthenticationService) {}

//   validatePassword() {
//     this.isPasswordValid = this.authService.loginAuth(this.user.email, this.user.password);
//   }

//   login() {
//     console.log('Iniciando sesión con:', this.user.email, this.user.password);
    
//     if (this.isPasswordValid) {
//       if (this.user.email === 'p@duoc.cl') {
//         this.router.navigate(['/menuprof'], {
//           queryParams: {
//             nombre: 'Sebastian Martinez',
//             correoElectronico: this.user.email,
//           },
//         });
//       } else if (this.user.email === 'a@duoc.cl') {
//         this.router.navigate(['/scanner'], {
//           queryParams: {
//             nombre: 'Laura Mejia',
//             correoElectronico: this.user.email,
//           },
//         });
//       }
//     } else {
//       // Las credenciales son incorrectas, muestra un mensaje de error
//     }
//   }
// }

interface User {
  nombre: string;
  password: string;
  email: string;
  tipo: string;
  materias?: any[]; // Otra información que pueda contener un usuario
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user = { email: '', password: '' };
  errorMessage: string = '';
  foundUser: any;

  constructor(private router: Router, private apiService: ApiService) {}

  login() {
    console.log('Iniciando sesión con:', this.user.email, this.user.password);

    this.apiService.getUsers().subscribe((response: any) => {
      console.log('Respuesta de la API:', response);
      const users: User[] = response.usuarios; // Indica que users es un array de objetos User

      this.foundUser = users.find((user: User) => user.email === this.user.email);

      if (this.foundUser) {
        console.log('Tipo de usuario:', this.foundUser.tipo);
        if (this.foundUser.tipo === 'profesor') {
          // Acciones para el profesor
          this.router.navigate(['/menuprof'], {
            queryParams: {
              nombre: this.foundUser.nombre,
              correoElectronico: this.foundUser.email,
              materias: this.foundUser.materias // Si necesitas pasar información adicional
            },
          });
        } else if (this.foundUser.tipo === 'alumno') {
          // Acciones para el alumno
          this.router.navigate(['/scanner'], {
            queryParams: {
              nombre: this.foundUser.nombre,
              correoElectronico: this.foundUser.email,
              // Otra información relevante para el alumno si es necesario
            },
          });
        }
      } else {
        this.errorMessage = 'Credenciales incorrectas';
      }
    }, (error) => {
      console.error('Error al obtener usuarios:', error);
      this.errorMessage = 'Error al obtener usuarios';
    });
  }
}
