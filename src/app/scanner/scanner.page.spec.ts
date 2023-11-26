import { ComponentFixture, TestBed, async, waitForAsync } from '@angular/core/testing';
import { ScannerPage } from './scanner.page';
import { IonicModule } from '@ionic/angular';


describe('ScannerPage', () => {
  let component: ScannerPage;
  let fixture: ComponentFixture<ScannerPage>;
  
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ScannerPage],
        imports: [IonicModule.forRoot()],
      }).compileComponents();
  
      fixture = TestBed.createComponent(ScannerPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });