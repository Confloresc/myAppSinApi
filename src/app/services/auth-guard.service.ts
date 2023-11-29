// import { Injectable, inject } from '@angular/core';
// import { CanActivateFn, Router} from '@angular/router';
// import { AuthenticationService } from '../services/authentication.service';



// export const authGuardFn: CanActivateFn = () => {

//   const tokenService = inject(AuthenticationService);
//   const routerService = inject(Router);

//   const token = tokenService.isAuthenticatedUser();
//    if(!token){
//     routerService.navigate(['/login'])
//     return false;
//    }
//    return true;
  
// }

import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticatedUser();
    
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    
    return true;
  }
}
