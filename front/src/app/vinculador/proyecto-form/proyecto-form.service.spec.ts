import { TestBed } from '@angular/core/testing';

import { ProyectoFormService } from './proyecto-form.service';

describe('ProyectoFormService', () => {
  let service: ProyectoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
