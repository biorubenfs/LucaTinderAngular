import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilContactoComponent } from './perfil-contacto.component';

describe('PerfilContactoComponent', () => {
  let component: PerfilContactoComponent;
  let fixture: ComponentFixture<PerfilContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
