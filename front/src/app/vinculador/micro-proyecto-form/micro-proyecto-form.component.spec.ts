import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroProyectoFormComponent } from './micro-proyecto-form.component';

describe('MicroProyectoFormComponent', () => {
  let component: MicroProyectoFormComponent;
  let fixture: ComponentFixture<MicroProyectoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroProyectoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicroProyectoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
