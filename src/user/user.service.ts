import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: mongoose.Model<UserDocument>,
  ) {}
  async create(dto: CreateUserDto): Promise<User> {
    const user = new this.userModel(dto);
    return await user.save();
  }

  async delete(id: string): Promise<User | null> {
    return await this.userModel.findByIdAndDelete(id).exec();
  }

  async getByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email }).exec();
  }
}
