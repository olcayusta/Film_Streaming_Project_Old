import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blog} from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http: HttpClient
  ) { }

  getBlogs() {
    return this.http.get<Blog[]>('http://localhost:4000/blogs');
  }

  saveBlog(data: any) {
    return this.http.post<Blog>('http://localhost:4000/blogs', data);
  }
}
