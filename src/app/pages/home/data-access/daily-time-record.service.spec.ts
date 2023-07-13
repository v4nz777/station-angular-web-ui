import { TestBed } from '@angular/core/testing';

import { DailyTimeRecordService } from './daily-time-record.service';

describe('DailyTimeRecordService', () => {
  let service: DailyTimeRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyTimeRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
