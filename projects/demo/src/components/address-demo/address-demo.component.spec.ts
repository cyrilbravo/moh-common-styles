import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDemoComponent } from './address-demo.component';

describe('AddressDemoComponent', () => {
  let component: AddressDemoComponent;
  let fixture: ComponentFixture<AddressDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
