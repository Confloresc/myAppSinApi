import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})

export class CursosPage implements OnInit {
  alertButtons: string[] = [];
  nombre: string | undefined;
  correoElectronico: string | undefined;

  constructor(private router: Router,private alertController: AlertController, private navCtrl: NavController,private route: ActivatedRoute) { }

  async presentAlert() {
    const alert = await this.alertController.create({

    });

    await alert.present();

  }

  goToMenuprofPage() {
    
    this.navCtrl.back();
  }

  ngOnInit() {
    // Obtener los parámetros pasados desde la página anterior.
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.correoElectronico = params['correoElectronico'];

      // Ahora puedes utilizar 'nombre' y 'correoElectronico' como desees en esta página.
    });
  }

  navegarADetalle(id: number, nombre: string, seccion: string, sala: string, horario: string) {
    // Navega a la página de detalle y pasa el id y el nombre como queryParams
    this.router.navigate(['/codigo-qr'], {
      queryParams: {
        id: id,
        nombre: nombre,
        seccion: seccion,
        sala: sala,
        horario: horario,
      }
    });

  }
}
