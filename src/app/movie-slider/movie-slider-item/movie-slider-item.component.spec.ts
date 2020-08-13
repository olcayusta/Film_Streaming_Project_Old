import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSliderItemComponent } from './movie-slider-item.component';

describe('MovieSliderItemComponent', () => {
  let component: MovieSliderItemComponent;
  let fixture: ComponentFixture<MovieSliderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSliderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
