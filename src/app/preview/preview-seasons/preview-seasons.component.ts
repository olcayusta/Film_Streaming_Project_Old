import { Component, OnInit } from '@angular/core';
import {EpisodeService} from '../../shared/services/episode.service';
import {Episode} from '../../shared/models/episode.model';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-preview-seasons',
  templateUrl: './preview-seasons.component.html',
  styleUrls: ['./preview-seasons.component.scss']
})
export class PreviewSeasonsComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Sezon 1'},
    {value: 'pizza-1', viewValue: 'Sezon 2'},
    {value: 'tacos-2', viewValue: 'Sezon 3'},
    {value: 'tacos-3', viewValue: 'Ekstralar'}
  ];

  episodes: Episode[];

  selected = 'option1';

/*
  episodes = [
    {
      title: 'Uno',
      desc: 'After the bears play pickup basketball, they go back to grab their stuff by the side of the court only to find it\'s been stolen!  The Bears race across town trying to track down their stuff and end up cracking a giant case in the process.',
      img: 'http://localhost:4000/static/bcs01.jpg'
    },
    {
      title: 'Viral Video',
      desc: '',
      img: 'http://localhost:4000/static/bcs02.jpg'
    },
    {
      title: 'Food Truck',
      desc: '',
      img: 'http://localhost:4000/static/bcs03.jpg'
    },
    {
      title: 'Chloe',
      desc: '',
      img: 'http://localhost:4000/static/bcs04.jpg'
    },
    {
      title: 'Panda\'s Date',
      desc: '',
      img: 'http://localhost:4000/static/bcs05.jpg'
    },
    {
      title: ' Everyday Bears',
      desc: '',
      img: 'https://ib.hulu.com/user/v3/artwork/1a39a0cd-41c9-46b3-b931-4008803b87e5?base_image=d0525453-29c5-4e4c-af45-94e6ffa73185&base_image_bucket_name=hummus&size=600x338&format=jpeg'
    },
    {
      title: 'Burrito',
      desc: '',
      img: 'https://ib1.hulu.com/user/v3/artwork/ff2de72a-b602-4e0b-a4be-29ca8462eb35?base_image=a53ef42f-9218-4821-8ff7-508fb737143b&base_image_bucket_name=hummus&size=600x338&format=jpeg'
    },
  ];
*/

  constructor(
    private episodeService: EpisodeService
  ) { }

  ngOnInit() {
    this.episodeService.getEpisodes(6).subscribe(episodes => {
      this.episodes = episodes;
    });
  }

}
