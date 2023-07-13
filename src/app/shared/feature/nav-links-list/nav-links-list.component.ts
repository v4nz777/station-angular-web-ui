import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkItemComponent, NavLinkItem } from '../../ui/nav-link-item/nav-link-item.component';

@Component({
  selector: 'app-nav-links-list',
  standalone: true,
  imports: [
    CommonModule,
    NavLinkItemComponent,

  ],
  templateUrl: './nav-links-list.component.html',
  styleUrls: ['./nav-links-list.component.css']
})
export class NavLinksListComponent {
  links:NavLinkItem[] = [
    { linkTitle:"Home", matIcon:"home" , routerLink:"/" },
  ]
}
