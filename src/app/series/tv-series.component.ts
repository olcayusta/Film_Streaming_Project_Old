import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.scss']
})
export class TvSeriesComponent implements OnInit, AfterViewInit {
  items = [
    {
      poster: 'https://image.tmdb.org/t/p/original/5KpBxzkMGXpQ8UUd8FIr1SDqz7E.jpg',
      title: 'The Flash',
      subtitle: '1972'
    },
    {
      poster: 'https://image.tmdb.org/t/p/original/vqBsgL9nd2v04ZvCqPzwtckDdFD.jpg',
      title: 'Supergirl',
      subtitle: '1974'
    },
    {
      poster: 'https://image.tmdb.org/t/p/original/qF0FNP83JEy1ihzRADqXV0NHGlX.jpg',
      title: 'Daredevil',
      subtitle: '1990'
    },
    {
      poster: 'https://image.tmdb.org/t/p/original/ufGsosF8iHVGK7xRXmGGgK1Mini.jpg',
      title: 'Jessica Jones',
      subtitle: '1997'
    },
    {
      poster: 'https://image.tmdb.org/t/p/original/mQWBExOnHrGVsjkpWczJjo6bhZy.jpg',
      title: 'Agent Carter',
      subtitle: '1988'
    },
    {
      poster: 'https://image.tmdb.org/t/p/original/9nWZZ1ghE0LuXEWJi7QjCymHygi.jpg',
      title: 'Luke Cage',
      subtitle: '1999'
    },
    {
      poster: 'https://image.tmdb.org/t/p/original/uYZ0hzw4eNHUWtEsH18pstsuefG.jpg',
      title: 'Weeds',
      subtitle: '2014'
    },
    {
      poster: 'https://ondemo.tmsimg.com/assets/p194893_b_v7_ac.jpg',
      title: 'Naruto',
      subtitle: 2003
    },
    {
      poster: 'https://ondemo.tmsimg.com/assets/p189454_b_v4_aa.jpg',
      title: 'Bleach',
      subtitle: 2005
    },
    {
      poster: 'https://ondemo.tmsimg.com/assets/p185775_b_v7_ad.jpg',
      title: 'Full Metal Alchemist',
      subtitle: 2001
    },
    {
      poster: 'https://ondemo.tmsimg.com/assets/p8655176_b_v4_aa.jpg',
      title: 'Avatar The Last Airbender',
      subtitle: 2004
    },
    {
      poster: 'https://ondemo.tmsimg.com/assets/p481589_b_v7_aa.jpg',
      title: 'Samurai 7',
      subtitle: 2009
    }
  ];

  constructor(
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
/*    const myImgs = document.querySelectorAll('.lazy');

    let observer = new IntersectionObserver(entries => {
      entries.forEach((entry: IntersectionObserverEntry) => {
/!*        if (entry.isIntersecting) {
          console.log('Is intersecting!')
        }*!/
        if (entry.intersectionRatio > 0) {
          console.log('in the view');
          const el: any = entry.target;
          el.src = el.dataset.src;

          const image = new Image();
          image.onload = () => {
            entry.target.classList.remove('lazy');
            observer.unobserve(entry.target);
          };
          image.src = el.dataset.src;

        } else {
          console.log('out of view');
        }
      });
    });

    myImgs.forEach(image => {
      observer.observe(image);
    });*/
  }

  addToLibrary() {
    this.snackbar.open('Film kitaplığa eklendi', '', {
      duration: 10000000
    })
  }
}
