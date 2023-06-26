import { Component,Input, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from './shared/feature/main-menu/main-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserInfoComponent } from './shared/feature/user-info/user-info.component';
import { TitleMenuBoardComponent } from './shared/feature/title-menu-board/title-menu-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,

    MainMenuComponent,
    UserInfoComponent,
    TitleMenuBoardComponent,

    MatSidenavModule,
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-ui-angular';
  viewProfile = false;

  @ViewChild('drawer') drawer:any;

  // ngAfterViewInit(){
  //   this.drawer.open()
  // }
}


