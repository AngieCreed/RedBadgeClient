import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldbadgeComponent } from './goldbadge.component';

describe('GoldbadgeComponent', () => {
  let component: GoldbadgeComponent;
  let fixture: ComponentFixture<GoldbadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldbadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldbadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
