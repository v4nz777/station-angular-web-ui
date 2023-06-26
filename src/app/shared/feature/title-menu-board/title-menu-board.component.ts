import { Component,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title-menu-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-menu-board.component.html',
  styleUrls: ['./title-menu-board.component.css']
})
export class TitleMenuBoardComponent {
  @Output() avatarClickedEvent = new EventEmitter<void>();
  avatarClicked(){
    this.avatarClickedEvent.emit()
  }
}
