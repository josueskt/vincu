import { TestBed } from '@angular/core/testing';

import { MicroProyectoFormService } from './micro-proyecto-form.service';

describe('MicroProyectoFormService', () => {
  let service: MicroProyectoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroProyectoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
