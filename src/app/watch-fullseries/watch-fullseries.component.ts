import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-fullseries',
  templateUrl: './watch-fullseries.component.html',
  styleUrls: ['./watch-fullseries.component.scss']
})
export class WatchFullseriesComponent implements OnInit {
  movies = [
    {
      poster: 'https://image.tmdb.org/t/p/original/k40WFAXMRekWEqsjURO3jiWob67.jpg',
      title: 'American Pie 2'
    },
    {
      poster: 'https://image.tmdb.org/t/p/original/iTnHtt1Ap1ujWx6qLRqzGjLMuwU.jpg',
      title: 'American Pie 2'
    },
    {
      poster: 'https://image.tmdb.org/t/p/original/hfTNFUyEefCYqPqScd4oF5ZHY5u.jpg',
      title: 'American Pie The Wedding'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
