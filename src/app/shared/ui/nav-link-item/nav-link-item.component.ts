import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-link-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './nav-link-item.component.html',
  styleUrls: ['./nav-link-item.component.css']
})
export class NavLinkItemComponent {
  @Input() linkItem = {
    linkTitle:"Link Title",
    matIcon: "pets",
    routerLink:"#"
  }
}

export interface NavLinkItem {
  linkTitle:string;
  matIcon:string;
  routerLink:string;
}
