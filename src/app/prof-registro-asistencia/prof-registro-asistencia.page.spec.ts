import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfRegistroAsistenciaPage } from './prof-registro-asistencia.page';

describe('ProfRegistroAsistenciaPage', () => {
  let component: ProfRegistroAsistenciaPage;
  let fixture: ComponentFixture<ProfRegistroAsistenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfRegistroAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
