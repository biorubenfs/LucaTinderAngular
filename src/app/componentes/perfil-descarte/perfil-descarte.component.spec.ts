import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDescarteComponent } from './perfil-descarte.component';

describe('PerfilDescarteComponent', () => {
  let component: PerfilDescarteComponent;
  let fixture: ComponentFixture<PerfilDescarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDescarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDescarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
