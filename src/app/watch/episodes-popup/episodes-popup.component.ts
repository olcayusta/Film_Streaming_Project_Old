import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {EpisodeService} from '../../shared/services/episode.service';
import {Episode} from '../../shared/models/episode.model';

@Component({
  selector: 'app-episodes-popup',
  templateUrl: './episodes-popup.component.html',
  styleUrls: ['./episodes-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EpisodesPopupComponent implements OnInit {
  @Input() postId: number;
  episodes: Episode[];

  selectedOption = 'option1';

  constructor(
    private episodeService: EpisodeService
  ) { }

  ngOnInit() {
    this.episodeService.getEpisodes(this.postId).subscribe(episodes => {
      this.episodes = episodes;
    });
  }

}
