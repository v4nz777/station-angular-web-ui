import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTimerComponent } from './user-timer.component';

describe('UserTimerComponent', () => {
  let component: UserTimerComponent;
  let fixture: ComponentFixture<UserTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserTimerComponent]
    });
    fixture = TestBed.createComponent(UserTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
