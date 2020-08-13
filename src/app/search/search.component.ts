import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SearchService} from '../shared/services/search.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../shared/models/post.model';
import {GenreService} from '../shared/services/genre.service';
import {Genre} from '../shared/models/genre.model';
import {MatChipSelectionChange} from '@angular/material';
import {distinctUntilChanged} from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm;
  posts: Post[];
  genres: Genre[];

  selectedChips = [];

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private genreService: GenreService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.posts = [];
      const {searchTerm} = params;
      this.searchTerm = searchTerm;
      this.searchService.search(searchTerm)
        .pipe(distinctUntilChanged())
        .subscribe(posts => {
          this.posts = posts;
        });
      this.genreService.getGenres().subscribe(genres => {
        this.genres = genres;
      });
    });
  }


  chipSelection($event: MatChipSelectionChange) {
    if ($event.selected) {
      this.selectedChips.push($event.source.value);
    } else {
      const index = this.selectedChips.indexOf($event.source.value);
      this.selectedChips.splice(index, 1);
    }
    console.log(this.selectedChips);
  }
}
