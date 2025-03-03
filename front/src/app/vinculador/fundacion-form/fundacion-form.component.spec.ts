import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundacionFormComponent } from './fundacion-form.component';

describe('FundacionFormComponent', () => {
  let component: FundacionFormComponent;
  let fixture: ComponentFixture<FundacionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundacionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
