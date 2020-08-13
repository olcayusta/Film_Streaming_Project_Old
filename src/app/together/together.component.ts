import {AfterViewInit, ChangeDetectorRef, Component, NgZone, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {SocketService} from '../shared/services/socket.service';
import {FormControl} from '@angular/forms';
import * as Hls from 'hls.js';
import {MatBottomSheet, MatSnackBar} from '@angular/material';
import {BottomSheetOverviewExampleSheet} from '../topbar/topbar.component';

@Component({
  selector: 'app-together',
  templateUrl: './together.component.html',
  styleUrls: ['./together.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TogetherComponent implements OnInit, AfterViewInit {
  @ViewChild('videoRef', {static: true}) videoRef;
  video: HTMLVideoElement;
  @ViewChild('videoEl', {static: true}) videoEl;

  video2;

  hls: Hls = new Hls();

  message = new FormControl('');
  messages = [];

  loaded = false;

  chatMessage = '';

  constructor(
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private socketService: SocketService,
    private ngZone: NgZone,
    private bottomSheet: MatBottomSheet
  ) {
/*
    this.video2 = document.createElement('video');
    this.hls.attachMedia(this.video2);
    this.hls.on(Hls.Events.MEDIA_ATTACHED, () => {
      console.log("video and hls.js are now bound together !");
      this.hls.loadSource('http://localhost:4000/static/fullmetal/master.m3u8');
      this.hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        console.log("manifest loaded, found " + data.levels.length + " quality level");
        this.video2.autoplay = true;
      });
    });
*/

  }

  init() {
    this.video = this.videoRef.nativeElement;
  }

  ngAfterViewInit() {
    this.init();
  }

  openBottomSheet() {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet, {

    })
  }

  ngOnInit() {

    const video = this.videoRef.nativeElement;
    this.ngZone.runOutsideAngular(() => {

      const hls = new Hls();
      // const video: HTMLVideoElement = document.createElement('video');

      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        console.log('video and hls.js are now bound together !');
        // hls.loadSource('http://localhost:4000/static/files/mr-robot/master.m3u8');
        hls.loadSource('https://video-ssl.itunes.apple.com/apple-assets-us-std-000001/Video128/v4/78/e9/2d/78e92d9d-d197-f129-9d64-60f1c6a962d7/mzvf_5423416201681465709.640x462.h264lc.U.p.m4v');
        hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
          console.log('manifest loaded, found ' + data.levels.length + ' quality level');
          video.autoplay = true;
         // this.videoEl.nativeElement.appendChild(video);
        });
      });
    });

    this.socketService.joinChannelNotify().subscribe(data => {
      alert(`${data} joined this channel.`);
    });

    this.socketService.playAll().subscribe(data => {
      this.video.play();
      this.video.currentTime = 20;
    });

    this.socketService.pauseAll().subscribe(data => {
      this.video.pause();
    });

    this.socketService.getMessage().subscribe(message => {
      this.messages.push(message);
    });
  }

  join() {
    this.socketService.joinChannel(2);
  }

  play() {
    this.socketService.play();
  }

  pause() {
    this.socketService.pause();
  }

  sync() {

  }

  sendChat() {
    this.socketService.sendMessage(this.message.value);
    this.message.patchValue('');
  }

  keydownEnter($event) {
    // $event.preventDefault();
    console.log($event);
    this.socketService.sendMessage(this.message.value);
    this.message.patchValue('');
  }

  setAudioJapan() {
    this.hls.audioTrack = 1;
    this.snackBar.open('Dil Japonca olarak değiştirildi', 'GERİ AL', {
      horizontalPosition: 'left',
      duration: 5000
    });
  }

  onEnter() {
    this.messages.push(this.chatMessage);
    this.chatMessage = '';
  }
}
