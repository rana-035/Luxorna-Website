import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbdatplaceComponent } from './ubdatplace.component';

describe('UbdatplaceComponent', () => {
  let component: UbdatplaceComponent;
  let fixture: ComponentFixture<UbdatplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbdatplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbdatplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
