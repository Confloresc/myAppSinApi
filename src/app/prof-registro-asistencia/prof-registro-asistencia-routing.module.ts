import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfRegistroAsistenciaPage } from './prof-registro-asistencia.page';


const routes: Routes = [
  {
    path: '',
    component: ProfRegistroAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfRegistroAsistenciaPageRoutingModule {}
