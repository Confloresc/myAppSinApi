import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';



export const authGuardFn: CanActivateFn = () => {

  const tokenService = inject(AuthenticationService);
  const routerService = inject(Router);

  const token = tokenService.isAuthenticatedUser();
   if(!token){
    routerService.navigate(['/login'])
    return false;
   }
   return true;
  
}
