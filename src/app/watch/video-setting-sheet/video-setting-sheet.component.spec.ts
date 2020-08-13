import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSettingSheetComponent } from './video-setting-sheet.component';

describe('VideoSettingSheetComponent', () => {
  let component: VideoSettingSheetComponent;
  let fixture: ComponentFixture<VideoSettingSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSettingSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSettingSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
