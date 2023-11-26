import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

loginAuth(email: string, password: string): boolean  {
  
  if (email === 'p@duoc.cl' && password === 'p123'){
    this.isAuthenticated = true;
  }else if(email === 'a@duoc.cl' && password === 'a123'){
    this.isAuthenticated = true;
  }else{
    this.isAuthenticated = false;
  }
    
  return this.isAuthenticated; 
  
  }  


isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  // Método para cerrar sesión
logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }  


}