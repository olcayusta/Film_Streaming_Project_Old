import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueWatchingSliderComponent } from './continue-watching-slider.component';

describe('ContinueWatchingSliderComponent', () => {
  let component: ContinueWatchingSliderComponent;
  let fixture: ComponentFixture<ContinueWatchingSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinueWatchingSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueWatchingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
