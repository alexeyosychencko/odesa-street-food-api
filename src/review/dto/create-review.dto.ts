import { Outlet } from 'src/outlet/outlet.schema';
import { User } from 'src/user/user.schema';

export class CreateReviewDto {
  ratingTaste: number;
  ratingClean: number;
  ratingPolite: number;
  text: string;
  createdAt: Date;
  userId: string;
  outletId: string;
}
