import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-later',
  templateUrl: './watch-later.component.html',
  styleUrls: ['./watch-later.component.scss']
})
export class WatchLaterComponent implements OnInit {
  items = [
    {
      poster: 'http://localhost:4000/static/Baba.jpg',
      title: 'Baba',
      subtitle: '1972'
    },
    {
      poster: 'http://localhost:4000/static/Baba2.jpg',
      title: 'Baba 2',
      subtitle: '1974'
    },
    {
      poster: 'http://localhost:4000/static/Baba3.jpg',
      title: 'Baba 3',
      subtitle: '1990'
    },
    {
      poster: 'http://localhost:4000/static/Boksor.jpg',
      title: 'Boksör',
      subtitle: '1997'
    },
    {
      poster: 'http://localhost:4000/static/Rambo3.jpg',
      title: 'Rambo3',
      subtitle: '1988'
    },
    {
      poster: 'http://localhost:4000/static/KahvaltiKulubu.jpg',
      title: 'Kahvaltı Kulübu',
      subtitle: '1999'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
