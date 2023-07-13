import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyTimeRecordComponent } from './feature/daily-time-record/daily-time-record.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    DailyTimeRecordComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
