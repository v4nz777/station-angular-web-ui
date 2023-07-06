import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinksListComponent } from './nav-links-list.component';

describe('NavLinksListComponent', () => {
  let component: NavLinksListComponent;
  let fixture: ComponentFixture<NavLinksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavLinksListComponent]
    });
    fixture = TestBed.createComponent(NavLinksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
