import {Post} from './post.model';

export class Stream {
  id: number;
  title: string;
  duration: number;
  thumbImg: string;
  videoId: string;
  creationTime: Date;
  postId: number;
  meta: any;
  post: Post;
}
