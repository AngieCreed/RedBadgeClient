import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcurrentComponent } from './itemcurrent.component';

describe('ItemcurrentComponent', () => {
  let component: ItemcurrentComponent;
  let fixture: ComponentFixture<ItemcurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemcurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
