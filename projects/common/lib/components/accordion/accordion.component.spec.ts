import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCommonComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionCommonComponent;
  let fixture: ComponentFixture<AccordionCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
