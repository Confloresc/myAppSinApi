import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuprofPageRoutingModule } from './menuprof-routing.module';

import { MenuprofPage } from './menuprof.page';
import { HeaderTeacherModule } from '../header-teacher/header-teacher.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuprofPageRoutingModule,
    HeaderTeacherModule,   
  ],
  declarations: [MenuprofPage]
})
export class MenuprofPageModule {}
