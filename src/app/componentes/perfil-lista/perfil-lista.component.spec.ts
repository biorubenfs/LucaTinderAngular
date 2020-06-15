import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilListComponent } from './perfil-lista.component';

describe('PerfilListaComponent', () => {
  let component: PerfilListComponent;
  let fixture: ComponentFixture<PerfilListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
