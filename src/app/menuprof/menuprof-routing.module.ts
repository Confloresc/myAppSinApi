import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuprofPage } from './menuprof.page';

const routes: Routes = [
  {
    path: '',
    component: MenuprofPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuprofPageRoutingModule {}
