import { IsDate, IsInt, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @Max(10)
  @Min(1)
  @IsInt()
  ratingTaste: number;

  @IsInt()
  @Max(10)
  @Min(1)
  ratingClean: number;

  @IsInt()
  @Max(10)
  @Min(1)
  ratingPolite: number;

  @IsString()
  text: string;

  @IsDate()
  createdAt: Date;

  @IsString()
  user: string;

  @IsString()
  outlet: string;
}
