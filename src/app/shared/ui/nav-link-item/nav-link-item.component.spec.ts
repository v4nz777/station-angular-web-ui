import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinkItemComponent } from './nav-link-item.component';

describe('NavLinkItemComponent', () => {
  let component: NavLinkItemComponent;
  let fixture: ComponentFixture<NavLinkItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavLinkItemComponent]
    });
    fixture = TestBed.createComponent(NavLinkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
