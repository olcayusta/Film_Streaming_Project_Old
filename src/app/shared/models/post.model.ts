import {Genre} from './genre.model';

export class Post {
  id: number;
  title: string;
  poster: string;
  releaseDate: Date;
  genres: Genre[];
  summary: string;
  type: number;
  heroImg: string;
}
