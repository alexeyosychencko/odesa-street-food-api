import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDocument } from './post.schema';

@Controller('post')
export class PostController {
  @Post('create')
  @UseInterceptors(FileInterceptor('image'))
  async create(@Body() dto: CreatePostDto, @UploadedFile() image) {
    //
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    //
  }

  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() dto: CreatePostDto,
    @UploadedFile() image,
  ) {
    // TODO: check is this user has access to update this
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
