import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-video-setting-sheet',
  templateUrl: './video-setting-sheet.component.html',
  styleUrls: ['./video-setting-sheet.component.scss']
})
export class VideoSettingSheetComponent implements OnInit {
  constructor(private bottomSheetRef: MatBottomSheetRef<VideoSettingSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
  }

}
