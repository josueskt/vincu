import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoccuatroComponent } from './doccuatro.component';

describe('DoccuatroComponent', () => {
  let component: DoccuatroComponent;
  let fixture: ComponentFixture<DoccuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoccuatroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoccuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
