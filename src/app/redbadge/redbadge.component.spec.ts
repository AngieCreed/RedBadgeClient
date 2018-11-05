import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedbadgeComponent } from './redbadge.component';

describe('RedbadgeComponent', () => {
  let component: RedbadgeComponent;
  let fixture: ComponentFixture<RedbadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedbadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedbadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
