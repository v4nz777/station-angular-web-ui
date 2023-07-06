import { Inject, Injectable, InjectionToken } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UserDataService } from './user-data.service';




@Injectable({
  providedIn: 'root',
})
export class ShiftTrackerService {
  constructor(private datepipe:DatePipe, private userData:UserDataService) { }

  timer = { hours:0, minutes:0, seconds:0}

  getShiftStarted():Date{
    const shiftStarted:string = this.userData.getUserData().lastShiftIn;
    return new Date(shiftStarted)
  }


}
