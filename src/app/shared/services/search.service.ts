import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(searchTerm: string) {
    return this.http.get<Post[]>(`${environment.apiUrl}/search/${searchTerm}`);
  }
}
