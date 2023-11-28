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

  @ViewChild('video', { static: false }) video?: ElementRef;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private toastController: ToastController
  ) {}

  async ngOnInit() {
    this.checkScannerSupport();
    this.startCamera();
  }

  async checkScannerSupport(): Promise<void> {
    try {
      const result = await BarcodeScanner.isSupported();
      this.isSupported = result.supported;
    } catch (error) {
      console.error('Error al verificar el soporte del escáner:', error);
      this.isSupported = false;
      this.presentAlert('Escáner no compatible');
    }
  }

  async startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      });
      const videoElement = this.video?.nativeElement;
      videoElement.srcObject = stream;
      videoElement.setAttribute('playsinline', 'true');
      videoElement.play();
    } catch (error) {
      console.error('Error al iniciar la cámara:', error);
    }
  }

  async scan(): Promise<void> {
    try {
      const granted = await this.requestPermissions();
      if (!granted) {
        this.presentAlert('Por favor, concede permisos de cámara para usar el escáner de códigos de barras.');
        return;
      }

      // Llama a la función startCamera() al hacer clic en el botón de escaneo
      this.startCamera();

      // Opcional: Puedes seguir utilizando BarcodeScanner.scan() si necesitas
      // realizar alguna acción específica después de escanear un código de barras.
      const { barcodes } = await BarcodeScanner.scan();
      this.barcodes.push(...barcodes);
    } catch (error) {
      console.error('Error durante el escaneo:', error);
    }
  }

  async requestPermissions(): Promise<boolean> {
    try {
      const { camera } = await BarcodeScanner.requestPermissions();
      return camera === 'granted' || camera === 'limited';
    } catch (error) {
      console.error('Error al solicitar permisos:', error);
      return false;
    }
  }

  async presentAlert(message: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permiso denegado',
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }
}
