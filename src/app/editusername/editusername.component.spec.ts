import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditusernameComponent } from './editusername.component';

describe('EditusernameComponent', () => {
  let component: EditusernameComponent;
  let fixture: ComponentFixture<EditusernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditusernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditusernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
