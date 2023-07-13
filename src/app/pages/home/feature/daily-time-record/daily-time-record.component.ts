import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { DailyTimeRecordService, DailyTimeRecord, DateRange } from '../../data-access/daily-time-record.service';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-daily-time-record',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,

  ],
  templateUrl: './daily-time-record.component.html',
  styleUrls: ['./daily-time-record.component.css'],
  providers: [ DailyTimeRecordService ]
})
export class DailyTimeRecordComponent {
  constructor(private dtrService:DailyTimeRecordService){}

  isLoadingResults:boolean = false;
  dataSource: DailyTimeRecord[] = []
  headers: string[] = ['date','started', 'ended', 'totalHours', 'totalOvertime', 'totalNightShift']
  range = new FormGroup({
    starts: new FormControl<Date | null> (null),
    ends: new FormControl<Date | null> (null)
  })



  getNumberOfDaysInMonth(month:number, year:number):number{
    return new Date(year,month,0).getDate()
  }

  setDefaultRange():void{
    let now = new Date()
    let starts = 1
    let ends = 15
    let year = now.getFullYear()
    let month = now.getMonth()

    if(now.getDate()>15){
      starts = 16
      ends = 0 //Zero means end of the previous month in Date()
    }
    this.range.controls['starts'].setValue(new Date(year,month,starts))
    this.range.controls['ends'].setValue(new Date(year,ends?month:month+1,ends))
    this.setRange()
  }

  ngOnInit(){
    this.setDefaultRange()
  }

  setRange():void{
    const starts = this.range.controls['starts'].value
    const ends = this.range.controls['ends'].value

    if(starts&&ends){
      this.isLoadingResults = true;
      this.dataSource = []
      setTimeout(async () => {
        this.dataSource = await this.dtrService.getDailyTimeRecords({ starts, ends })
        this.isLoadingResults = false;
      }, 3000);


    }
  }

}
