import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { CodigoQRPage } from './codigo-qr.page';
import { AlertController } from '@ionic/angular';

describe('CodigoQRPage', () => {
  let component: CodigoQRPage;
  let fixture: ComponentFixture<CodigoQRPage>;
  let activatedRouteSpy: any;
  let alertControllerSpy: jasmine.SpyObj<AlertController>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;

  beforeEach(waitForAsync(() => {
    const routeSpy = jasmine.createSpyObj('ActivatedRoute', ['queryParams']);
    const alertSpy = jasmine.createSpyObj('AlertController', ['create', 'present']);
    const navControllerSpy = jasmine.createSpyObj('NavController', ['back']);

    TestBed.configureTestingModule({
      declarations: [CodigoQRPage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: ActivatedRoute, useValue: routeSpy },
        { provide: AlertController, useValue: alertSpy },
        { provide: NavController, useValue: navControllerSpy },
      ],
    }).compileComponents();

    activatedRouteSpy = TestBed.inject(ActivatedRoute);
    alertControllerSpy = TestBed.inject(AlertController) as jasmine.SpyObj<AlertController>;
    navCtrlSpy = TestBed.inject(NavController) as jasmine.SpyObj<NavController>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty text', () => {
    expect(component.text).toBe('');
  });

  it('should set text based on query parameters', () => {
    const queryParams = {
      id: 1,
      nombre: 'Clase A',
      seccion: 'A1',
      sala: 'Sala 101',
      horario: '10:00 AM',
    };

    activatedRouteSpy.queryParams.next(queryParams);
    fixture.detectChanges();

    const expectedText = `Clase: ${queryParams.nombre}, ID: ${queryParams.id}, Sección: ${queryParams.seccion}`;
    expect(component.text).toBe(expectedText);
  });

  it('should call navCtrl.back() on goToProfRegistroAsistenciaPage()', () => {
    component.goToProfRegistroAsistenciaPage();
    expect(navCtrlSpy.back).toHaveBeenCalled();
  });

  it('should call presentAlert() on ngOnInit()', async () => {
    spyOn(component, 'presentAlert').and.callThrough();
    
    await component.ngOnInit();

    expect(component.presentAlert).toHaveBeenCalled();
  });

  // Add more tests as needed
});