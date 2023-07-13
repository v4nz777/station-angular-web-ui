import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTimeRecordComponent } from './daily-time-record.component';

describe('DailyTimeRecordComponent', () => {
  let component: DailyTimeRecordComponent;
  let fixture: ComponentFixture<DailyTimeRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DailyTimeRecordComponent]
    });
    fixture = TestBed.createComponent(DailyTimeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
