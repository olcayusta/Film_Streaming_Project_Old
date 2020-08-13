import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSeasonsComponent } from './preview-seasons.component';

describe('PreviewSeasonsComponent', () => {
  let component: PreviewSeasonsComponent;
  let fixture: ComponentFixture<PreviewSeasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewSeasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
