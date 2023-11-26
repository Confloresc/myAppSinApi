import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validUsers = [
    { email: 'p@duoc.cl', password: 'p123' },
    { email: 'a@duoc.cl', password: 'a123' }
  ];

  constructor() { }

  loginAuth(email: string, password: string): boolean {
    // Verifica si las credenciales son válidas
    const user = this.validUsers.find(u => u.email === email && u.password === password);
    return !!user; // Devuelve true si se encontró un usuario válido
  }
}
