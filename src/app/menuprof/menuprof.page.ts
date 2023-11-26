import { Component, OnInit, ElementRef, ViewChildren, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-menuprof',
  templateUrl: './menuprof.page.html',
  styleUrls: ['./menuprof.page.scss'],
})
export class MenuprofPage implements OnInit {
  nombre: string | undefined;
  correoElectronico: string | undefined;
  tokenService = inject(AuthenticationService);
  @ViewChildren(IonCard, { read: ElementRef }) cardElements: QueryList<ElementRef<HTMLIonCardElement>>;

  private animation: Animation;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private animationCtrl: AnimationController) {
    this.cardElements = new QueryList<ElementRef<HTMLIonCardElement>>();
    this.animation = this.animationCtrl.create();
  }


  ngOnInit() {
    // Obtener los parámetros pasados desde la página anterior usando queryParams.
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.correoElectronico = params['correoElectronico'];

    });
    
  }

  navigateAsistencia() {
    // Verifica si tienes datos válidos antes de navegar.
    if (this.nombre && this.correoElectronico) {
      this.navCtrl.navigateForward('/prof-registro-asistencia', {
        queryParams: {
          nombre: this.nombre,
          correoElectronico: this.correoElectronico,
        },
      });
    } else {
      // Puedes manejar un escenario donde los datos no están disponibles.
      console.error('Faltan datos de usuario para navegar a prof-registro-asistencia');
    }
  }

  navigateAsistenciareg() {
    // Verifica si tienes datos válidos antes de navegar.
    if (this.nombre && this.correoElectronico) {
      this.navCtrl.navigateForward('/cursos', {
        queryParams: {
          nombre: this.nombre,
          correoElectronico: this.correoElectronico,
        },
      });
    } else {
      // Puedes manejar un escenario donde los datos no están disponibles.
      console.error('Faltan datos de usuario para navegar a prof-registro-asistencia');
    }
  }
  goToMenuprofPage() {

    // Navegar hacia atrás en la historia de navegación
    this.navCtrl.navigateForward('/login');


  }

  ngAfterViewInit() {
    
    if (this.cardElements && this.cardElements.length > 0) {
    const card = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(0)!.nativeElement)
      .duration(2000)
      .beforeStyles({
        filter: 'invert(75%)',
      })
      .beforeClearStyles(['box-shadow'])
      .afterStyles({
        'box-shadow': 'rgba(255, 0, 50, 0.4) 0px 4px 16px 6px',
      })
      .afterClearStyles(['filter'])
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.5)' },
        { offset: 1, transform: 'scale(1)' },
      ]);

    this.animation = this.animationCtrl.create().duration(2000).addAnimation([card]);
  } else {
    console.error('this.cardElements está indefinido o vacío');
  }
  }

  play() {
    this.animation.play();
  }

  ionViewDidEnter() {
    this.play(); 
  }
  logout(){
    this.tokenService.logout();
    
  }

}
