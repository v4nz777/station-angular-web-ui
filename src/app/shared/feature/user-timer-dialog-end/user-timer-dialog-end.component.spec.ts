import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTimerDialogEndComponent } from './user-timer-dialog-end.component';

describe('UserTimerDialogEndComponent', () => {
  let component: UserTimerDialogEndComponent;
  let fixture: ComponentFixture<UserTimerDialogEndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserTimerDialogEndComponent]
    });
    fixture = TestBed.createComponent(UserTimerDialogEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
