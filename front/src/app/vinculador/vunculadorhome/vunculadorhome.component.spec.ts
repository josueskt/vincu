import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VunculadorhomeComponent } from './vunculadorhome.component';

describe('VunculadorhomeComponent', () => {
  let component: VunculadorhomeComponent;
  let fixture: ComponentFixture<VunculadorhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VunculadorhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VunculadorhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
