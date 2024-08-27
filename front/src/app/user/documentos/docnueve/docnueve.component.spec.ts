import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocnueveComponent } from './docnueve.component';

describe('DocnueveComponent', () => {
  let component: DocnueveComponent;
  let fixture: ComponentFixture<DocnueveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocnueveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocnueveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
