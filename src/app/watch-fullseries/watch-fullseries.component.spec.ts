import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchFullseriesComponent } from './watch-fullseries.component';

describe('WatchFullseriesComponent', () => {
  let component: WatchFullseriesComponent;
  let fixture: ComponentFixture<WatchFullseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchFullseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchFullseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
