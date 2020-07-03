import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResturantComponent } from './update-resturant.component';

describe('UpdateResturantComponent', () => {
  let component: UpdateResturantComponent;
  let fixture: ComponentFixture<UpdateResturantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateResturantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
