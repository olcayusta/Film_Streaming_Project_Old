import {Post} from './post.model';

export class Cast {
  id: number;
  name: string;
  avatar: string;
  type: number;
  films: Post[];
}
