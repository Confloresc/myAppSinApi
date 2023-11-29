import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})

export class CodigoQRPage implements OnInit {
  alertButtons: string[] = [];
  text: string = "";  // Inicialmente, el texto está vacío

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  id!: number;
  nombre!: string;
  seccion!: string;
  sala!: string;
  horario!: string;

  async presentAlert() {
    const alert = await this.alertController.create({});
    await alert.present();
  }

  goToProfRegistroAsistenciaPage() {
    this.navCtrl.back();
  }

  ngOnInit() {
    // Recupera los datos de los queryParams
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.nombre = params['nombre'];
      this.seccion = params['seccion'];
      this.sala = params['sala'];
      this.horario = params['horario'];
  
      // Establece el valor de 'text' como el 'id' de la sección
      this.text = `Clase: ${this.nombre}, ID: ${this.id}, Sección: ${this.seccion}`;
    });
  }
  
  
}