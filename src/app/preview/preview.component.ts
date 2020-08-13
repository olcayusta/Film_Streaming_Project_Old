import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../shared/services/post.service';
import {Post} from '../shared/models/post.model';
import {MatSnackBar} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, AfterViewInit {
  post: Post;
  postId;

  isFavorited = false;

  imageLoaded;
  @ViewChild('fullBleedImage', {static: true}) fullBleedImage: HTMLImageElement;

  constructor(
    private route: ActivatedRoute,
    public domSanitizer: DomSanitizer,
    private postService: PostService,
    private snackBar: MatSnackBar,
  ) { }

  favorite() {
    this.isFavorited = ! this.isFavorited;
    this.snackBar.open('Favorilere eklendi', '', {
      duration: 3000,
      horizontalPosition: 'left'
    });
  }

  ngAfterViewInit() {
    // console.log(this.fullBleedImage);
  }

  doSomething() {
    // alert('Loaded!');
    this.imageLoaded = true;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const {postId} = params;
      this.postId = postId;
      this.postService.getPost(postId).subscribe(post => {
        this.post = post;
      });
    });
  }

  addToLibrary() {
    this.snackBar.open('Kitaplığa eklendi', '', {
      duration: 3000,
      horizontalPosition: 'left'
    });
  }
}
