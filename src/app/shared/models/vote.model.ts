import {Post} from './post.model';

export class Vote {
  id: number;
  type: number;
  postId: number;
  userId: number;
  creationTime: Date;
  posts: Post[];
}
