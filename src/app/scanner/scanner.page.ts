// scanner.page.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner, Barcode } from '@capacitor-mlkit/barcode-scanning';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-scanner',
  templateUrl: 'scanner.page.html',
  styleUrls: ['scanner.page.scss'],
})
export class ScannerPage {
  isSupported = false;
  barcodes: Barcode[] = [];
  correoElectronico: any;
  nombre: any;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private toastController: ToastController
  ) {}

  

  ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  
  
  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }
}
