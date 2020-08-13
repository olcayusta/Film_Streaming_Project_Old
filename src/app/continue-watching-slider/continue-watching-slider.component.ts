import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MatRipple} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-continue-watching-slider',
  templateUrl: './continue-watching-slider.component.html',
  styleUrls: ['./continue-watching-slider.component.scss']
})
export class ContinueWatchingSliderComponent implements OnInit {
  @ViewChildren(MatRipple) rippleList: QueryList<MatRipple>;
  continueWatchingItems = [
    {
      img: 'https://images.static-bluray.com/reviews/6639_5_large.jpg',
      title: '2 Broke Girls',
      subtitle: 'S1 B2 - 12 dakika kaldı',
      progress: 10
    },
    {
      img: 'https://images2.static-bluray.com/reviews/10977_6_large.jpg',
      title: 'Fargo',
      subtitle: 'S1 B12 • Zero Day - 8 dakika kaldı',
      progress: 40
    },
    {
      img: 'https://images.static-bluray.com/reviews/6639_12.jpg',
      title: '2 Broke Girls',
      subtitle: 'S1 B1',
      progress: 12
    },
    {
      img: 'https://images2.static-bluray.com/reviews/1891_5.jpg',
      title: 'How I Met Your Mother',
      subtitle: 'S1 B1 • "Winter is Coming"',
      progress: 80
    },
    {
      img: 'https://blutv-images.akamaized.net/q/t/i/bluv2/86/445x255/5aeac380058d029e487ba004',
      title: 'Sex and The City',
      subtitle: '2007 • Film'
    },
    {
      img: 'https://blutv-images.akamaized.net/q/t/i/bluv2/86/890x510/5c10074a866ac31918cebb9e',
      title: 'Basketball Diaries',
      subtitle: '1995 • Film'
    },
    {
      img: 'https://1.bp.blogspot.com/-s3lmo-c-S3g/W4qygsoSjgI/AAAAAAAAXz0/A_e1G10-4h8OojRFRrng8dsuQyyIfZdogCEwYBhgL/s1600/Shooter%2B1.jpg',
      title: 'Tetikçi',
      subtitle: '2007 • Film'
    },
    {
      img: 'https://1.bp.blogspot.com/-s3lmo-c-S3g/W4qygsoSjgI/AAAAAAAAXz0/A_e1G10-4h8OojRFRrng8dsuQyyIfZdogCEwYBhgL/s1600/Shooter%2B1.jpg',
      title: 'Tetikçi',
      subtitle: '2007 • Film'
    }
  ];

  transform;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  /** Shows a centered and persistent ripple. */
  launchRipple(event: MouseEvent, index: number) {
    this.rippleList.toArray()[index].launch(event.x, event.y);
  }

  forward() {
    this.transform = this.sanitizer.bypassSecurityTrustStyle(`translateX(-1600px)`);
  }

  back() {
    this.transform = this.sanitizer.bypassSecurityTrustStyle(`translateX(0)`);
  }

  projectContentChanged() {
    console.log('Icerik degisti!');
  }
}
