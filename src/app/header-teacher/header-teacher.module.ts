import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar este módulo
import { HeaderTeacherComponent } from './header-teacher.component';

@NgModule({
  declarations: [HeaderTeacherComponent],
  exports: [HeaderTeacherComponent],
  imports: [IonicModule],
})
export class HeaderTeacherModule {}
