import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntialHomeComponent } from './intial-home.component';

describe('IntialHomeComponent', () => {
  let component: IntialHomeComponent;
  let fixture: ComponentFixture<IntialHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntialHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntialHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
