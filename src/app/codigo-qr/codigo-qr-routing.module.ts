import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CodigoQRPage } from './codigo-qr.page';
import { Component } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: CodigoQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoQRPageRoutingModule {

  elementos: any[] = [];
  
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      if (params.has('elementos')) {
        this.elementos = JSON.parse(params.get('elementos') || '[]');
      }
    });
  }

}
