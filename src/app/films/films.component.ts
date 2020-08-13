import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmsComponent implements OnInit {
  items = [
    {
      poster: 'http://is5.mzstatic.com/image/thumb/Video/v4/80/86/a6/8086a657-d1aa-755a-bffc-50b5dc5f3b86/source/300x300bb.jpg',
      title: 'Gözüm Üzerinizde',
      subtitle: '2009'
    },
    {
      poster: 'http://is5.mzstatic.com/image/thumb/Video2/v4/9d/45/ca/9d45ca8a-bff2-ba55-3600-8ae7611f15d3/source/300x300bb.jpg',
      title: '40 Yıllık Bekar',
      subtitle: 2008
    },
    {
      poster: 'http://is5.mzstatic.com/image/thumb/Video6/v4/ee/6b/64/ee6b6488-af47-022f-aabc-6f2fd9f675d5/source/300x300bb.jpg',
      title: 'Bu Sondur',
      subtitle: 2005
    },
    {
      poster: 'https://is3-ssl.mzstatic.com/image/thumb/Video5/v4/21/8e/fd/218efd79-bb5a-8bcb-07fd-1dad9f835f5c/source/600x600bb.jpg',
      title: 'Tropic Thunder',
      subtitle: 1992
    },
    {
      poster: 'http://is5.mzstatic.com/image/thumb/Video41/v4/c7/fd/64/c7fd64ec-3e4c-4008-7674-5ba90cf0cf26/source/100000x100000-999.jpg',
      title: 'Rain Man',
      subtitle: 1995
    },
    {
      poster: 'http://is5.mzstatic.com/image/thumb/Video/v4/f1/b2/cd/f1b2cd66-5fb6-7c5f-c838-1cab7bbadfc8/source/100000x100000-999.jpg',
      title: 'Hulk',
      subtitle: 2003
    },
    {
      poster: 'https://image.tmdb.org/t/p/original/2LCm2B02i7dNDWqoOBDmiZTEuyl.jpg',
      title: 'Sahne Ateşi'
    },
    {
      poster: 'https://ondemo.tmsimg.com/assets/p14910_v_v7_aa.jpg',
      title: 'Poetic Justice'
    },
    {
      poster: 'https://ondemo.tmsimg.com/assets/p29400_v_v7_aa.jpg',
      title: '8 Mile'
    },
    {
      poster: 'https://ondemo.tmsimg.com/assets/p16167_v_v7_aa.jpg',
      title: 'Oleanna'
    },
    {
      poster: 'https://ondemo.tmsimg.com/assets/p12664_v_v7_aa.jpg',
      title: 'New Jack City'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
