import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../shared/services/post.service';
import {Post} from '../../shared/models/post.model';

@Component({
  selector: 'app-preview-about',
  templateUrl: './preview-about.component.html',
  styleUrls: ['./preview-about.component.scss']
})
export class PreviewAboutComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const {postId} = params;
      this.postService.getPost(postId).subscribe(post => {
        this.post = post;
      });
    });
  }

}
