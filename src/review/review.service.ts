import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review, ReviewDocument } from './review.schema';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name)
    private readonly reviewModel: mongoose.Model<ReviewDocument>,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const createReview = new this.reviewModel(createReviewDto);
    return createReview.save();
  }

  async delete(id: string): Promise<Review | null> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async findByOutletId(outletId: string): Promise<Review[]> {
    return this.reviewModel.find({ outlet: outletId }).exec();
  }

  async deleteByOutletId(outletId: string) {
    return this.reviewModel.deleteMany({ outlet: outletId }).exec();
  }
}
