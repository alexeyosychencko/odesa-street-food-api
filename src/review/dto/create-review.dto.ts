export class CreateReviewDto {
  ratingTaste: number;
  ratingClean: number;
  ratingPolite: number;
  text: string;
  createdAt: Date;
  user: string;
  outlet: string;
}
