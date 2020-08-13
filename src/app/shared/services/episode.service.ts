import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Episode} from '../models/episode.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  getEpisodes(postId: number) {
    return this.http.get<Episode[]>(`http://localhost:4000/posts/${postId}/episodes`);
  }
}
