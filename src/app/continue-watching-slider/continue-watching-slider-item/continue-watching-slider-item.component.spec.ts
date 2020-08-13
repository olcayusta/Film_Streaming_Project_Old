import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueWatchingSliderItemComponent } from './continue-watching-slider-item.component';

describe('ContinueWatchingSliderItemComponent', () => {
  let component: ContinueWatchingSliderItemComponent;
  let fixture: ComponentFixture<ContinueWatchingSliderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinueWatchingSliderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueWatchingSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
