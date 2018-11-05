import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedbadgecommentscreateComponent } from './redbadgecommentscreate.component';

describe('RedbadgecommentscreateComponent', () => {
  let component: RedbadgecommentscreateComponent;
  let fixture: ComponentFixture<RedbadgecommentscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedbadgecommentscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedbadgecommentscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
