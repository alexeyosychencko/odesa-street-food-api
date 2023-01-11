import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDocument } from './post.schema';

@Controller('post')
export class PostController {
  @Post('create')
  async create(@Body() dto: CreatePostDto) {
    //
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    //
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: PostDocument) {
    //
  }

  @Get(':id')
  async getByPostId(@Param('id') id: string) {
    //
  }

  @Get('get-new')
  async getAllPosts() {
    //
  }
}
