import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedbadgecommentslistComponent } from './redbadgecommentslist.component';

describe('RedbadgecommentslistComponent', () => {
  let component: RedbadgecommentslistComponent;
  let fixture: ComponentFixture<RedbadgecommentslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedbadgecommentslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedbadgecommentslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
