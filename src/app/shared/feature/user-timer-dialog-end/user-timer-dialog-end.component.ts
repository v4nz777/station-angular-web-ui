import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



// For the "End Shift" Button
@Component({
  selector: 'app-user-timer-dialog-end',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule

  ],
  templateUrl: './user-timer-dialog-end.component.html',
  styleUrls: ['./user-timer-dialog-end.component.css']
})
export class UserTimerDialogEndComponent {
  constructor(public dialog: MatDialog) {}

  @Output() endShiftEvent = new EventEmitter<boolean>();

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogAnimationUserEndTimer, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.endShiftEvent.emit(result)
    })
  }
}



// For the PopUp Modal
@Component({
  selector: 'dialog-user-timer-dialog-end',
  templateUrl: 'user-timer-dialog-end-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogAnimationUserEndTimer {
  constructor(public dialogRef: MatDialogRef<DialogAnimationUserEndTimer>) {}

}
