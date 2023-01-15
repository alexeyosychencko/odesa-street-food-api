import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { Post, PostDocument } from './post.schema';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: mongoose.Model<PostDocument>,
  ) {}

  async create(createPostDto: CreatePostDto, image?): Promise<Post> {
    const createPost = new this.postModel(createPostDto);
    if (image) {
      // TODO: save image
      createPost.imageUrl = '';
    }
    return await createPost.save();
  }

  async delete(id: string): Promise<Post | null> {
    return await this.postModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, post: CreatePostDto, image?): Promise<Post> {
    let imageUrl;
    if (image) {
      // TODO: save image
      imageUrl = '';
    }
    return await this.postModel
      .findOneAndUpdate({ id: id }, imageUrl ? { ...post, imageUrl } : post, {
        new: true,
      })
      .exec();
  }

  async findById(id: string): Promise<Post> {
    return await this.postModel.findOne({ id }).exec();
  }

  async findAll(): Promise<Post[]> {
    return await this.postModel.find().exec();
  }

  async findLast(limit: number, skip?: number): Promise<Post[]> {
    const query = this.postModel.find().limit(limit).sort({ createdAt: -1 });
    if (skip) {
      return query.skip(skip).exec();
    }
    return await query.exec();
  }
}
