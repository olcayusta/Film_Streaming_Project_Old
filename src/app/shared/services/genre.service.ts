import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Genre} from '../models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  getGenres() {
    return this.http.get<Genre[]>('http://localhost:4000/genres');
  }
}
