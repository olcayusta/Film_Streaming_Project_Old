import {User} from './user.model';

export class Blog {
  id: number;
  type: number;
  meta: any;
  userId: number;
  creationTime: Date;
  user: User;
}
