import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review.schema';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post('create')
  async create(@Body() dto: CreateReviewDto): Promise<Review> {
    return this.reviewService.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleted = await this.reviewService.delete(id);
    if (!deleted) {
      throw new HttpException('Not found review.', HttpStatus.NOT_FOUND);
    }
  }

  @Get('by-outlet:outletId')
  async getByProduct(@Param('outletId') outletId: string) {
    return this.reviewService.findByOutletId(outletId);
  }
}
