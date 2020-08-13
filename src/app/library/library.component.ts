import { Component, OnInit } from '@angular/core';
import {VoteService} from '../shared/services/vote.service';
import {Vote} from '../shared/models/vote.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  votes: Vote[];

  constructor(
    private voteService: VoteService
  ) { }

  ngOnInit() {
    this.voteService.getFavorites(1).subscribe(data => {
      this.votes = data;
    });
  }

}
