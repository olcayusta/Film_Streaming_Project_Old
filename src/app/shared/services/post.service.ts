import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post.model';
import {Movie} from '../models/movie.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<Movie[]>(`${environment.apiUrl}/movies`);
  }

  getPost(postId: number) {
    return this.http.get<Post>(`${environment.apiUrl}/posts/${postId}`);
  }

  getPostByGenre(genreId: number) {
    return this.http.get<Post[]>(`http://localhost:4000/posts/genre/${genreId}`);
  }
}
