import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../shared/models/movie.model';

@Component({
  selector: 'app-movie-slider-item',
  templateUrl: './movie-slider-item.component.html',
  styleUrls: ['./movie-slider-item.component.scss']
})
export class MovieSliderItemComponent implements OnInit {
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
