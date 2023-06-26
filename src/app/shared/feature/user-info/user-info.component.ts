import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserTimerComponent } from '../user-timer/user-timer.component';


@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [
    CommonModule,

    UserTimerComponent,

    MatExpansionModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {


  @ViewChild('overview') overview:any;

  ngAfterViewInit(){
    this.overview.open();
  }
}
