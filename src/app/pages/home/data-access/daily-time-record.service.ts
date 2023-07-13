import { Injectable } from '@angular/core';
import { UserDataService } from 'src/app/shared/data-access/user-data.service';


@Injectable({
  providedIn: 'root'
})
export class DailyTimeRecordService {

  constructor() { }

  async getDailyTimeRecords(range:DateRange|null=null):Promise<DailyTimeRecord[]> {
    const userData = new UserDataService().getUserData()
    console.log(userData.username)
    // Todo get DTR from range
    // Todo GetDTR
    return [
      {
        started: new Date("2023-06-01T06:00:30"),
        ended: new Date("2023-06-01T14:05:30"),
        totalHours: 10,
        totalOvertime: 2,
        totalNightShift: 2,
      },
      {
        started: new Date("2023-06-02T06:10:30"),
        ended: new Date("2023-06-02T14:05:30"),
        totalHours: 10,
        totalOvertime: 2,
        totalNightShift: 2,
      },
      {
        started: new Date("2023-06-03T06:00:23"),
        ended: new Date("2023-06-17T03:15:50"),
        totalHours: 10,
        totalOvertime: 2,
        totalNightShift: 2,
      },
      {
        started: new Date("2023-06-04T06:00:30"),
        ended: new Date("2023-06-04T14:05:30"),
        totalHours: 10,
        totalOvertime: 2,
        totalNightShift: 2,
      },
      {
        started: new Date("2023-06-05T06:10:30"),
        ended: new Date("2023-06-05T14:05:30"),
        totalHours: 10,
        totalOvertime: 2,
        totalNightShift: 2,
      },
      {
        started: new Date("2023-06-17T06:00:23"),
        ended: new Date("2023-06-17T14:15:50"),
        totalHours: 10,
        totalOvertime: 2,
        totalNightShift: 2,
      },
      {
        started: new Date("2023-06-15T06:00:30"),
        ended: new Date("2023-06-15T14:05:30"),
        totalHours: 10,
        totalOvertime: 2,
        totalNightShift: 2,
      },
      {
        started: new Date("2023-06-16T06:10:30"),
        ended: new Date("2023-06-16T14:05:30"),
        totalHours: 10,
        totalOvertime: 2,
        totalNightShift: 2,
      },
      {
        started: new Date("2023-06-17T06:00:23"),
        ended: new Date("2023-06-17T14:15:50"),
        totalHours: 10,
        totalOvertime: 2,
        totalNightShift: 2,
      },
      {
        started: new Date("2023-06-15T06:00:30"),
        ended: new Date("2023-06-15T14:05:30"),
        totalHours: 10,
        totalOvertime: 2,
        totalNightShift: 2,
      },
      {
        started: new Date("2023-06-16T06:10:30"),
        ended: new Date("2023-06-16T14:05:30"),
        totalHours: 10,
        totalOvertime: 2,
        totalNightShift: 2,
      },
      {
        started: new Date("2023-06-17T06:00:23"),
        ended: new Date("2023-06-17T14:15:50"),
        totalHours: 10,
        totalOvertime: 2,
        totalNightShift: 2,
      },
      {
        started: new Date("2023-06-15T06:00:30"),
        ended: new Date("2023-06-15T14:05:30"),
        totalHours: 10,
        totalOvertime: 2,
        totalNightShift: 2,
      },
      {
        started: new Date("2023-06-16T06:10:30"),
        ended: new Date("2023-06-16T14:05:30"),
        totalHours: 10,
        totalOvertime: 2,
        totalNightShift: 2,
      },
      {
        started: new Date("2023-06-17T06:00:23"),
        ended: new Date("2023-06-17T14:15:50"),
        totalHours: 10,
        totalOvertime: 2,
        totalNightShift: 2,
      },
      ]
  }
}


export interface DailyTimeRecord {
  started:Date;
  ended:Date | null;
  totalHours:number;
  totalOvertime:number;
  totalNightShift:number;
}

export interface DateRange {
  starts: Date| null;
  ends: Date| null
}

