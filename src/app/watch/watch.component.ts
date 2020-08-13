import {AfterViewInit, ChangeDetectionStrategy, Component, NgZone, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatBottomSheet, MatIconRegistry, MatSliderChange} from '@angular/material';
import {Overlay, OverlayContainer} from '@angular/cdk/overlay';
import {ActivatedRoute, Router} from '@angular/router';
import {StreamService} from '../shared/services/stream.service';
import {Stream} from '../shared/models/stream.model';
import * as Hls from 'hls.js';
import {DomSanitizer} from '@angular/platform-browser';
import {VideoSettingSheetComponent} from './video-setting-sheet/video-setting-sheet.component';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchComponent implements OnInit, AfterViewInit {
  @ViewChild('videoRef', {static: true}) videoRef;
  video: HTMLVideoElement;
  hls: Hls = new Hls();

  audioTracks: any;
  selectedAudioTrack = 0;

  progress;
  buffer;
  currentMins = 0;
  currentSecs = 0;
  durationMins;
  durationSecs;

  isFullscreen = false;

  onloadedData = false;

  userActivity = false;

  settingSelectorOpened = false;

  /* Speed Values */
  playbackRates = [
    0.25, 0.50, 0.75, 1, 1.25, 1.50, 2
  ];
  selectedPlaybackRate = 3; // 1 (Normal)

  stream: Stream;

  lastMove;

  constructor(
    private overlayContainer: OverlayContainer,
    private route: ActivatedRoute,
    public overlay: Overlay,
    private ngZone: NgZone,
    private router: Router,
    private streamService: StreamService,
    private bottomSheet: MatBottomSheet
  ) {
    // this.overlayContainer.getContainerElement().classList.add('dark-theme');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

/*    setInterval(() => {
      const diff = Date.now() - this.lastMove;
      if (diff > 1000) {
        console.log('Inactive for ' + diff + ' ms');
        this.userActivity = false;
      }
    }, 1000);*/


    this.video = this.videoRef.nativeElement;


    const vid: any = document.querySelector('#video2');

    this.route.params.subscribe(params => {
      const video = this.videoRef.nativeElement;
        const {id} = params;
        this.streamService.getStream(id).subscribe(stream => {
          this.stream = stream;
          this.hls.attachMedia(this.video);
          this.hls.on(Hls.Events.MEDIA_ATTACHED, () => {
            // this.hls.loadSource(`http://localhost:4000/static/files/${stream.videoId}/master.m3u8`);
            this.hls.loadSource(`http://192.168.1.4:4000/static/beyblade-07/master.m3u8`);
            // this.hls.loadSource(`https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8`);
            // this.hls.loadSource('http://localhost:4000/static/fullmetalv2/master.m3u8');

            this.hls.on(Hls.Events.AUDIO_TRACK_LOADED, (event2, data2) => {
              this.audioTracks = this.hls.audioTracks;
              console.log(this.audioTracks);
            });

            this.hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
              vid.play();

              this.hls.on(Hls.Events.SUBTITLE_TRACK_LOADED, (veri, x) => {
                this.hls.subtitleTrack = 0;
                this.hls.subtitleDisplay = true;
              });

              this.hls.on(Hls.Events.SUBTITLE_FRAG_PROCESSED, (event3, data3) => {
                const tracks  = video.textTracks[0];
                tracks.mode = 'hidden'; // must occur before cues is retrieved
                const cues = video.textTracks[0].cues;
                const cuesLength = Object.keys(video.textTracks[0].cues).length;
                for (let i = 0; i < cuesLength; i++) {
                  cues[i].onenter = (data) => {
                    console.log(data.currentTarget);
                    console.log(data.currentTarget.text);
                    if (data.currentTarget.line !== 'auto') {
                      document.getElementById('subtitle-display').classList.add('fixed-text')
                      document.getElementById('subtitle-display').style.top = data.currentTarget.line + '%';
                    } else {
                      document.getElementById('subtitle-display').style.top = 'auto';
                    }
                    document.getElementById('text').style.display = 'inline';
                    document.getElementById('text').innerHTML = data.currentTarget.text.replace('\n', '<br>');
                    const texts = data.currentTarget.text.split('\n');
                    console.log(texts);
                    console.log(data.currentTarget.text.replace('\n', '<br>'));
                  };
                  cues[i].onexit = (data) => {
                    document.getElementById('text').style.display = 'none';
                    // const text = data.currentTarget.text;
                  };
                }
              });

            });
          });
        });
      });



    this.video.onloadeddata = () => {
      console.log('loaded');
      this.onloadedData = true;
      this.calcDuration();
    };

    this.video.ontimeupdate = () => {
      this.progress = this.video.currentTime * 100 / this.video.duration;
      // console.log(this.progress);

      this.currentMins = Math.floor(this.video.currentTime / 60);
      this.currentSecs = Math.floor(this.video.currentTime - this.currentMins * 60);

      // if (this.currentSecs < 10) { this.currentSecs = '0' + this.currentSecs; }
      // if( this.currentMins < 10){ this.currentMins = '0' + this.currentMins; }
    };
  }

  videoWaiting() {
    console.log('Video bekleniyor...');
  }

  mouseMove(event) {
    this.lastMove = Date.now();
  }

  videoProgress(event) {
    if (this.video.buffered.length > 0) {
      this.buffer = (this.video.buffered.end(0) / this.video.duration) * 100;
    }
  }

  calcDuration() {
    this.durationMins = Math.floor(this.video.duration / 60);
    this.durationSecs = Math.floor(this.video.duration - this.durationMins * 60);
    if (this.durationSecs < 10) { this.durationSecs = '0' + this.durationSecs; }
    if (this.durationMins < 10) { this.durationMins = '0' + this.durationMins; }
  }

  fullscreen() {
    const elem: any = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    }
    this.isFullscreen = true;
  }

  fullscreenExit() {
    const doc: any = document;
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      doc.webkitExitFullscreen();
    }
    this.isFullscreen = false;
  }

  playpause() {
    this.video.paused ? this.video.play() : this.video.pause();
  }

  replay10() {
    if (this.video.buffered) {
      this.video.currentTime = this.video.currentTime - 10;
    }
  }

  forward10() {

    /*
        let vid = document.getElementById('video2'),
          ticks = 30, // number of frames during fast-forward
          frms = 10, // number of milliseconds between frames in fast-forward/rewind
          endtime = 24.0; // time to fast-forward/remind to (in seconds)
        // fast-forward/rewind video to end time
        var tdelta = (endtime - vid.currentTime) / ticks;
        var startTime = vid.currentTime;
        for ( var i = 0; i < ticks; ++i )
        {
          (function(j){
            setTimeout(function() {
              document.getElementById('video2').currentTime = startTime + tdelta * j;
            }, j * frms);
          })(i);
        }
    */

    if (this.video.buffered) {
      this.video.currentTime = this.video.currentTime + 10;
    }

  }

  volumeChange(event: MatSliderChange) {
    this.video.volume = event.value / 100;
  }

  /* Off subtitle */
  subtitleOff() {
    this.hls.subtitleTrack = -1;
    this.hls.subtitleDisplay = false;
    document.getElementById('subtitle-display').style.display = 'none';
  }

  /* Change subtitle */
  subtitleChange() {
    this.hls.subtitleTrack = 0;
    document.getElementById('subtitle-display').style.display = 'block';
  }

  setTrack(number: number) {
    this.hls.audioTrack = number;
    this.selectedAudioTrack = number;
  }

  setPlaybackRate(number: number, index: number) {
    this.video.playbackRate = number;
    this.selectedPlaybackRate = index;
  }

  openBottomSheet(): void {
    this.bottomSheet.open(VideoSettingSheetComponent);
  }
}
