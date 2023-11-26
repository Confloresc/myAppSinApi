import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoQRPageRoutingModule } from './codigo-qr-routing.module';

import { CodigoQRPage } from './codigo-qr.page';
import { HeaderTeacherModule } from '../header-teacher/header-teacher.module';

import { QRCodeModule } from 'angularx-qrcode';
//https://www.npmjs.com/package/angularx-qrcode/v/16.0.2
//instalar: npm install angularx-qrcode --save


@NgModule({
  imports: [
    QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoQRPageRoutingModule,
    HeaderTeacherModule
  ],
  declarations: [CodigoQRPage]
})
export class CodigoQRPageModule {}
