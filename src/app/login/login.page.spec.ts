import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router'; // Import the Router
import { LoginPage } from './login.page';
import { AuthenticationService } from '../services/authentication.service';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let routerSpy: jasmine.SpyObj<Router>; // Declare routerSpy

  beforeEach(async () => {
    // Create a spy object for Router
    const spy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [RouterTestingModule],
      providers: [
        AuthenticationService,
        { provide: Router, useValue: spy }, // Provide the spy object
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // Get the spy object
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to menuprof for professor login', () => {
    component.user.email = 'p@duoc.cl';
    component.user.password = 'p123';
    component.isPasswordValid = true;

    component.login();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/menuprof'], {
      queryParams: {
        nombre: 'Sebastian Martinez',
        correoElectronico: 'p@duoc.cl',
      },
    });
  });

  it('should navigate to scanner for admin login', () => {
    component.user.email = 'a@duoc.cl';
    component.user.password = 'a123';
    component.isPasswordValid = true;

    component.login();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/scanner'], {
      queryParams: {
        nombre: 'Laura Mejia',
        correoElectronico: 'a@duoc.cl',
      },
    });
  });

  it('should not navigate with invalid credentials', () => {
    component.login();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });
});
