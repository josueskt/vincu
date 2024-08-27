import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocseisComponent } from './docseis.component';

describe('DocseisComponent', () => {
  let component: DocseisComponent;
  let fixture: ComponentFixture<DocseisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocseisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocseisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
