import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocunoComponent } from './docuno.component';

describe('DocunoComponent', () => {
  let component: DocunoComponent;
  let fixture: ComponentFixture<DocunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
