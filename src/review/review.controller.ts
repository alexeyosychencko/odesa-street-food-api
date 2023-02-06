import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/roles.enum';
import { JwtAuthGuard } from 'src/strategies/jwt.strategy';
import { ValidationPipe } from '../pipes/validation.pipe';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './review.schema';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Post('create')
  async create(
    @Body(new ValidationPipe()) dto: CreateReviewDto,
  ): Promise<Review> {
    return await this.reviewService.create(dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleted = await this.reviewService.delete(id);
    if (!deleted) {
      throw new HttpException('Not found review.', HttpStatus.NOT_FOUND);
    }
  }

  @Get('by-outlet:outletId')
  async getByProduct(@Param('outletId') outletId: string) {
    return await this.reviewService.findByOutletId(outletId);
  }
}
