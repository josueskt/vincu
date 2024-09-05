import { TestBed } from '@angular/core/testing';

import { FundacionFormService } from './fundacion-form.service';

describe('FundacionFormService', () => {
  let service: FundacionFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundacionFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
