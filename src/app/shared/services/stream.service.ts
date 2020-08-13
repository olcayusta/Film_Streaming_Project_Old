import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Stream} from '../models/stream.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  constructor(
    private http: HttpClient
  ) { }

  getStream(videoId: number) {
    return this.http.get<Stream>(`${environment.apiUrl}/streams/${videoId}`);
  }
}
