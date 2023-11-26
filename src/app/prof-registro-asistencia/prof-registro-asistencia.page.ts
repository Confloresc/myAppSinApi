import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prof-registro-asistencia',
  templateUrl: './prof-registro-asistencia.page.html',
  styleUrls: ['./prof-registro-asistencia.page.scss'],
})

export class ProfRegistroAsistenciaPage implements OnInit {
  alertButtons: string[] = [];
  alertController: any;
  nombre: string | undefined;
  correoElectronico: string | undefined;

constructor(private router: Router, alertController: AlertController, private navCtrl: NavController,private route: ActivatedRoute) { }

  objetos = [
    { id: 1, nombre: 'Portafolio', seccion:'010V', sala:'F210',horario:'19:00 a 20:20' },
    { id: 2, nombre: 'Base de datos', seccion:'014V', sala:'V108',horario:'20:30 a 21:20' },
    { id: 3, nombre: 'Programación APP', seccion:'009V', sala:'T504',horario:'21:21 a 22:30' }
  ];

  async presentAlert() {
    const alert = await this.alertController.create({

    });

    await alert.present();

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
  goToCursosPage() {
      

    this.navCtrl.back();

  }
}





    
  

  
