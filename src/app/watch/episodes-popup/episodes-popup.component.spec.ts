import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesPopupComponent } from './episodes-popup.component';

describe('EpisodesPopupComponent', () => {
  let component: EpisodesPopupComponent;
  let fixture: ComponentFixture<EpisodesPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodesPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
