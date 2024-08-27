import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocdosComponent } from './docdos.component';

describe('DocdosComponent', () => {
  let component: DocdosComponent;
  let fixture: ComponentFixture<DocdosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocdosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
