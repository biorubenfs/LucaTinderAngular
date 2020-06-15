import { TestBed } from '@angular/core/testing';

import { PerfilServicioService } from './perfil-servicio.service';

describe('PerfilServicioService', () => {
  let service: PerfilServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
