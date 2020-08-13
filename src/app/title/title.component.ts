import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/services/post.service';
import {Post} from '../shared/models/post.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postService.getPost(params['titleId']).subscribe(post => {
        this.post = post;
      })
    });

  }

}
