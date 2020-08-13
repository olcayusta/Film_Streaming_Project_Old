import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Movie} from '../shared/models/movie.model';
import {PostService} from '../shared/services/post.service';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.scss']
})
export class MovieSliderComponent implements OnInit, AfterViewInit {
  movies: Movie[];
  transform;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }

  ngAfterViewInit(): void {
  }

  observed() {
    let lazyImages = [].slice.call(document.querySelectorAll('.lazy2'));

    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            let lazyImage: any = entry.target;
            const image = new Image();
            image.onload = function() {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy2");
              lazyImageObserver.unobserve(lazyImage);
            };
            image.src = lazyImage.dataset.src;
          }
        });
      });

      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Possibly fall back to a more compatible method here
    }

  }
}
