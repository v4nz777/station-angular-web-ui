import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserInfoComponent } from './shared/feature/user-info/user-info.component';
import { TitleMenuBoardComponent } from './shared/feature/title-menu-board/title-menu-board.component';
import { NavLinksListComponent } from './shared/feature/nav-links-list/nav-links-list.component';
import { UserDataService } from './shared/data-access/user-data.service';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,

    LoginComponent,
    RegisterComponent,
    UserInfoComponent,
    TitleMenuBoardComponent,
    NavLinksListComponent,

    MatSidenavModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    UserDataService
  ],
})
export class AppComponent {
  constructor(public userDataService:UserDataService){}
  title = 'web-ui-angular';
  userData = this.userDataService.getUserData();
  pageTitle = `Welcome ${this.userData.fullName}`
  viewProfile = false;
  authenticated = false;
  usersMode = "login"


}


