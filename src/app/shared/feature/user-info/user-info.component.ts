import { Component, AfterViewChecked, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserTimerComponent } from '../user-timer/user-timer.component';
import { UserDataService, UserModel } from '../../data-access/user-data.service';


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
  providers: [
    UserDataService,
  ],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent {
  constructor(public userDataService:UserDataService){}

  @ViewChild('overview') overview?:MatExpansionPanel|null = null;

  userData = this.userDataService.getUserData();


}
