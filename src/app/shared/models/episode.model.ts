export class Episode {
  id: number;
  title: string;
  duration: number;
  thumbImg: string;
  videoId: string;
  postId: number;
  creationTime: Date;
  heroImg: string;
  meta: {
    season: number,
    no: number
  };
}
