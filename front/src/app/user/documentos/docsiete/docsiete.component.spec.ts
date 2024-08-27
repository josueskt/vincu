import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsieteComponent } from './docsiete.component';

describe('DocsieteComponent', () => {
  let component: DocsieteComponent;
  let fixture: ComponentFixture<DocsieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsieteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocsieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
