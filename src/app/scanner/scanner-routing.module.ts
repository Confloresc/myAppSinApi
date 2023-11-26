import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScannerPage } from './scanner.page'; // Importa el componente ScannerPage

const routes: Routes = [
  {
    path: '',
    component: ScannerPage // Asigna el componente ScannerPage a la ruta ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScannerPageRoutingModule {}
