import { Inject, Injectable, InjectionToken } from '@angular/core';
import { DatePipe } from '@angular/common';




@Injectable({
  providedIn: 'root',
})
export class ShiftTrackerService {
  constructor(private datepipe:DatePipe) { }

  timer = { hours:0, minutes:0, seconds:0}

  getShiftStarted():Date{
    return new Date("2023-06-15T13:45:30Z")
  }


}
