import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cast} from '../models/cast.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(castId: number) {
    return this.http.get<Cast>(`//localhost:4000/casts/${castId}`);
  }
}
