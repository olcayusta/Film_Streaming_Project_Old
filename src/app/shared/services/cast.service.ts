import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cast} from '../models/cast.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http: HttpClient) { }

  getCast(castId: number) {
    return this.http.get<Cast>(`${environment.apiUrl}/casts/${castId}`);
  }
}
