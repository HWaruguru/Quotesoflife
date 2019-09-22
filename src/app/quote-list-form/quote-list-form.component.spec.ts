import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteListFormComponent } from './quote-list-form.component';

describe('QuoteListFormComponent', () => {
  let component: QuoteListFormComponent;
  let fixture: ComponentFixture<QuoteListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
