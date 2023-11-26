import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  loginAuth(email: string, password: string): boolean {
    if (email === 'p@duoc.cl' && password === 'p123') {
      return true;
    } else if (email === 'a@duoc.cl' && password === 'a123') {
      return true;
    }
    return false;
  }
}
