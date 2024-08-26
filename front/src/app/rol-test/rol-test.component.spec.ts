import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolTestComponent } from './rol-test.component';

describe('RolTestComponent', () => {
  let component: RolTestComponent;
  let fixture: ComponentFixture<RolTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RolTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
