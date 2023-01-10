import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostModel } from './post.model';

@Controller('post')
export class PostController {
  @Post('create')
  async create(@Body() dto: Omit<PostModel, '_id'>) {
    //
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    //
  }

  @Get('get-new')
  async getByProduct() {
    //
  }
}
