import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedbadgecommentsComponent } from './redbadgecomments.component';

describe('RedbadgecommentsComponent', () => {
  let component: RedbadgecommentsComponent;
  let fixture: ComponentFixture<RedbadgecommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedbadgecommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedbadgecommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
