import {AfterViewInit, Component, OnInit, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
import {PostService} from '../shared/services/post.service';
import {Post} from '../shared/models/post.model';
import {DomSanitizer} from '@angular/platform-browser';
import {MatRipple, MatSnackBar} from '@angular/material';
import {Movie} from '../shared/models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  transform;

  items = [
    {
      title: 'Family Guy',
      img: 'https://ib1.hulu.com/user/v3/artwork/4e5fae1d-69bb-4aca-b516-445af38937ca?base_image=56f432f6-98ee-409a-9e65-64353cd6812b&base_image_bucket_name=hummus&size=600x338&format=jpeg',
      number: 'S16 B11',
      name: 'Dog Bites Bear'
    }
  ];

  animations: Post[];

  recommendedShows = [
    {
      img: 'https://ondemo.tmsimg.com/assets/p211519_b_h11_ae.jpg',
      title: 'Beyblade'
    },
    {
      img: 'https://ondemo.tmsimg.com/assets/p191624_b_h11_aa.jpg',
      title: 'Batman: The Brave and the Bold'
    },
    {
      img: 'https://ondemo.tmsimg.com/assets/p8303139_b_h11_aa.jpg',
      title: 'G.I. Joe Renegades',
    },
    {
      img: 'https://ondemo.tmsimg.com/assets/p8352394_b_h11_ab.jpg',
      title: 'Transformers Prime',
    },
    {
      img: 'https://ondemo.tmsimg.com/assets/p8497398_b_h11_ab.jpg',
      title: 'Bakugan'
    },
    {
      img: 'https://ondemo.tmsimg.com/assets/p534172_b_h11_aa.jpg',
      title: 'Yu-Gi-Oh!'
    },
    {
      img: 'https://ondemo.tmsimg.com/assets/p432102_b_h11_ag.jpg',
      title: 'Looney Tunes'
    }
    /*    {
          img: 'https://1.bp.blogspot.com/-s3lmo-c-S3g/W4qygsoSjgI/AAAAAAAAXz0/A_e1G10-4h8OojRFRrng8dsuQyyIfZdogCEwYBhgL/s1600/Shooter%2B1.jpg',
          title: 'Tetikçi',
          subtitle: '2007 • Film'
        }*/
  ];
  recommendedAnimations = [
    {
      img: 'https://ondemo.tmsimg.com/assets/p10513242_b_h11_aa.jpg',
      title: 'The Powerpuff Girls'
    },
    {
      img: 'https://yt3.ggpht.com/aS7cdHNJ0g5Qe67CuB9GCx4Td5Eb0KPEnjVDQXLNwDKJ_XRQodxQMA0vn0u0ZzlITh4pBhbrm4XC',
      title: 'Johnny Bravo'
    },
    {
      img: 'https://ondemo.tmsimg.com/assets/p481593_b_h11_ad.jpg',
      title: 'Samurai Jack'
    },
    {
      img: 'https://ondemo.tmsimg.com/assets/p14885634_b_h11_aa.jpg',
      title: 'Clarence'
    },
    {
      img: 'https://ondemo.tmsimg.com/assets/p360096_b_h11_aj.jpg',
      title: 'Cow and Chicken'
    },
    {
      img: 'https://scdn.nflximg.net/images/5148/3595148.jpg',
      title: 'Beyblade'
    }
  ];
  recommendFilms = [
    {
      img: 'https://blutv-images.akamaized.net/q/t/i/bluv2/86/445x255/5c24cdb2866ac30eecc8c539',
      title: 'Luther',
      progress: 10
    },
    {
      img: 'https://blutv-images.akamaized.net/q/t/i/bluv2/86/445x255/5c13b3c1866ac31c3c0ec5cb',
      title: 'Minority Report',
      subtitle: 'S1 B10 • Zero Day',
      progress: 40
    },
    {
      img: 'https://blutv-images.akamaized.net/q/t/i/bluv2/86/445x255/5bffd0d9866ac31bfcbe1f64',
      title: 'The Girl With The Dragon Tattoo',
      subtitle: 'S5 B3 • Hazard Day',
      progress: 60
    },
    {
      img: 'https://blutv-images.akamaized.net/q/t/i/bluv2/86/445x255/5bffd0c0866ac31bfcbe1f58',
      title: 'Prisoners'
    },
    {
      img: 'https://blutv-images.akamaized.net/q/t/i/bluv2/86/590x330/5c18d33e866ac322ecd4b858',
      title: 'The Wire'
    }
    /*    {
          img: 'https://1.bp.blogspot.com/-s3lmo-c-S3g/W4qygsoSjgI/AAAAAAAAXz0/A_e1G10-4h8OojRFRrng8dsuQyyIfZdogCEwYBhgL/s1600/Shooter%2B1.jpg',
          title: 'Tetikçi',
          subtitle: '2007 • Film'
        }*/
  ];

  constructor(
    private postService: PostService,
    private domSanitizer: DomSanitizer,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {

/*    this.postService.getPostByGenre(4).subscribe(posts => {
      this.animations = posts;
    });*/

  /*  const clientWidth = document.getElementsByTagName('body')[0].clientWidth;

    // const left = document.getElementById('movies').offsetLeft;
    const offsetWidth = document.getElementById('movies').offsetWidth;
    const oneItem = offsetWidth / 6;
    console.log(oneItem);*/

  }

  ngAfterViewInit(): void {
  }

  forward() {
    this.transform = this.domSanitizer.bypassSecurityTrustStyle(`translateX(-1600px)`);
  }

  back() {
    this.transform = this.domSanitizer.bypassSecurityTrustStyle(`translateX(0)`);
  }

  watchLater() {
    this.snackBar.open('Daha sonra izlemek için eklendi', 'GERİ AL', {
      duration: 5000,
      horizontalPosition: 'left'
    });
  }

  dblClick() {
    alert('Double click!');
  }

}
