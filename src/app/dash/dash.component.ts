import { Component, OnInit } from '@angular/core';
declare var shaka: any;

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  manifestUri = 'http://localhost:4000/static/output/stream.mpd';

  constructor() { }

  ngOnInit() {
    this.initApp();
  }

  initApp() {
    // Install built-in polyfills to patch browser incompatibilities.
    shaka.polyfill.installAll();

    // Check to see if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
      // Everything looks good!
      this.initPlayer();
    } else {
      // This browser does not have the minimum set of APIs we need.
      console.error('Browser not supported!');
    }
  }

  initPlayer() {
    // Create a Player instance.
    const video = document.getElementById('video');
    const player = new shaka.Player(video);

    // Attach player to the window to make it easy to access in the JS console.
   //window.player = player;

    // set text language preference to Greek and buffering goal to 2 minutes:
    player.configure({
      preferredTextLanguage: 'en'
    });


// Listen for error events.
    player.addEventListener('error', this.onErrorEvent);

// Try to load a manifest.
// This is an asynchronous process.
    player.load(this.manifestUri).then(function () {
      // This runs if the asynchronous load is successful.
      console.log('The video has now been loaded!');
    }).catch(error => {this.onError(error)});  // onError is executed if the asynchronous load fails.
  }

  onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    this.onError(event.detail);
  }

  onError(error) {
    // Log the error.
    console.error('Error code', error.code, 'object', error);
  }

}
