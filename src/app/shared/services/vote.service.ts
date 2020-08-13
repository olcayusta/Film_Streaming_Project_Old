import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vote} from '../models/vote.model';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }

  getFavorites(userId: number) {
    return this.http.get<Vote[]>(`http://localhost:4000/users/${userId}/votes`);
  }
}
