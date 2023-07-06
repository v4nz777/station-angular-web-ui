import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserTimerDialogEndComponent } from '../user-timer-dialog-end/user-timer-dialog-end.component';
import { ShiftTrackerService } from 'src/app/shared/data-access/shift-tracker.service';


@Component({
  selector: 'app-user-timer',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    UserTimerDialogEndComponent

  ],
  templateUrl: './user-timer.component.html',
  styleUrls: ['./user-timer.component.css'],
  providers: [ShiftTrackerService, DatePipe]
})


export class UserTimerComponent {
  constructor(private shiftTracker:ShiftTrackerService){}
  timerIsVisible = false;
  timer = this.shiftTracker.timer
  private animationFrameId:number|null = null;

  updateTimer(): void{
    this.timerIsVisible = true;
    let now = new Date()
    let timeStarted = new Date(this.shiftTracker.getShiftStarted())
    let timeDifference = now.getTime() - timeStarted.getTime()

    let seconds = Math.floor(timeDifference/1000)
    let minutes = Math.floor(seconds/60)
    let hours = Math.floor(minutes/60)

    seconds = seconds % 60;
    minutes = minutes % 60;

    this.timer.hours = hours
    this.timer.minutes = minutes
    this.timer.seconds = seconds
  }

  startTracker() {
    if (this.animationFrameId === null){
      const update = (currentTime: number) => {
        this.updateTimer();
        this.animationFrameId = requestAnimationFrame(update);
      };
      this.animationFrameId = requestAnimationFrame(update);
    }
  }

  stopTracker(event:boolean):void {
    if(!event)return
    if(this.animationFrameId !== null){
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
      this.timerIsVisible = false;
    }
  }
}



