import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild} from '@angular/core';
import * as HLS from 'hls.js';

@Component({
  selector: 'app-party-player',
  templateUrl: './party-player.component.html',
  styleUrls: ['./party-player.component.scss'],
})
export class PartyPlayerComponent implements OnInit, AfterViewInit {
  @ViewChild('video', {static: true}) video;
  hls: HLS;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.hls = new HLS();
    if (HLS.isSupported()) {
      this.hls.attachMedia(this.video.nativeElement);
      this.hls.on(HLS.Events.MEDIA_ATTACHED, () => {
        this.hls.loadSource('http://192.168.1.2:4000/static/output/master.m3u8');
        // this.hls.loadSource('http://192.168.1.5:4000/static/lsd/master.m3u8');
        this.hls.on(HLS.Events.MANIFEST_PARSED, () => {
          setTimeout(() => {
            console.log(this.video.nativeElement);
            this.video.nativeElement.play();
          }, 200)

          this.hls.on(HLS.Events.AUDIO_TRACK_LOADED, () => {
            console.log(this.hls.audioTracks);
          })

        });
      });
    }
  }

  setAudio(lang: number) {
    this.hls.audioTrack = lang;
  }
}
