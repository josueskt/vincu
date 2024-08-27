import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocochoComponent } from './dococho.component';

describe('DocochoComponent', () => {
  let component: DocochoComponent;
  let fixture: ComponentFixture<DocochoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocochoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocochoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
