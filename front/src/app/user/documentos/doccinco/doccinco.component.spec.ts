import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoccincoComponent } from './doccinco.component';

describe('DoccincoComponent', () => {
  let component: DoccincoComponent;
  let fixture: ComponentFixture<DoccincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoccincoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoccincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
