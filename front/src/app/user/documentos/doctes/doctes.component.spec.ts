import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctesComponent } from './doctes.component';

describe('DoctesComponent', () => {
  let component: DoctesComponent;
  let fixture: ComponentFixture<DoctesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
