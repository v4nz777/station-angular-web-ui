import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleMenuBoardComponent } from './title-menu-board.component';

describe('TitleMenuBoardComponent', () => {
  let component: TitleMenuBoardComponent;
  let fixture: ComponentFixture<TitleMenuBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TitleMenuBoardComponent]
    });
    fixture = TestBed.createComponent(TitleMenuBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
