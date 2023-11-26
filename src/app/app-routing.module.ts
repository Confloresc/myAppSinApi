import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from './not-found/not-found.page'; // Importa la página NotFoundPage
import { authGuardFn } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'prof-registro-asistencia',
    loadChildren: () => import('./prof-registro-asistencia/prof-registro-asistencia.module').then(m => m.ProfRegistroAsistenciaPageModule),
    canActivate: [authGuardFn]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [authGuardFn]
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./codigo-qr/codigo-qr.module').then(m => m.CodigoQRPageModule),
    canActivate: [authGuardFn]
  },
  {
    path: 'prof-registro-asistencia',
    loadChildren: () => import('./prof-registro-asistencia/prof-registro-asistencia.module').then(m => m.ProfRegistroAsistenciaPageModule),
    canActivate: [authGuardFn]
  },
  {
    path: 'profesor',
    loadChildren: () => import('./profesor/profesor.module').then(m => m.ProfesorPageModule),
    canActivate: [authGuardFn]
  },
  {
    path: 'scanner',
    loadChildren: () => import('./scanner/scanner.module').then(m => m.ScannerPageModule)
  },
  {
    path: 'menuprof',
    loadChildren: () => import('./menuprof/menuprof.module').then(m => m.MenuprofPageModule),
    canActivate: [authGuardFn]
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosPageModule),
    canActivate: [authGuardFn]
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then(m => m.AsistenciaPageModule),
    canActivate: [authGuardFn]
  },

  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundPageModule)
  },
  { path: '**', redirectTo: 'not-found' } // Ruta de "catch-all" redirige a la página de not-found
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
