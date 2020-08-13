import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CastService} from '../shared/services/cast.service';
import {Cast} from '../shared/models/cast.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PeopleComponent implements OnInit {
  cast: Cast;

  constructor(
    private castService: CastService
  ) { }

  ngOnInit() {
    this.castService.getCast(1).subscribe(cast => {
      this.cast = cast;
    });
  }

}
