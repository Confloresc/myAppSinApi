import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header-teacher',
  templateUrl: './header-teacher.component.html',
  styleUrls: ['./header-teacher.component.scss'],
})
export class HeaderTeacherComponent  implements OnInit {
  title='Menú profesor'
  tokenService = inject(AuthenticationService);
  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  logout(){
    this.tokenService.logout();    
  }
  goToBack() {    
    this.navCtrl.back();
  }

}
