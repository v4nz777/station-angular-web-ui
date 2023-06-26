import { TestBed } from '@angular/core/testing';

import { ShiftTrackerService } from './shift-tracker.service';

describe('ShiftTrackerService', () => {
  let service: ShiftTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShiftTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
