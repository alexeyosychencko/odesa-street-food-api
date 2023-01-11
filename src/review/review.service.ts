import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/user.schema';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModule } from './review.module';
import { Review, ReviewDocument, ReviewSchema } from './review.schema';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name)
    private readonly reviewModel: Model<ReviewDocument>,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const createReview = new this.reviewModel(createReviewDto);
    return createReview.save();
  }
}
