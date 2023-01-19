import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CreateOutletDto } from './dto/create-outlet.dto';
import { Outlet, OutletDocument } from './outlet.schema';

@Injectable()
export class OutletService {
  constructor(
    @InjectModel(Outlet.name)
    private readonly outletModel: mongoose.Model<OutletDocument>,
  ) {}

  async create(createOutletDto: CreateOutletDto, image?): Promise<Outlet> {
    const outlet = new this.outletModel(createOutletDto);
    if (image) {
      // TODO: save image
      outlet.imageUrl = '';
    }
    return await outlet.save();
  }

  async delete(id: string): Promise<Outlet | null> {
    return await this.outletModel.findByIdAndDelete(id).exec();
  }

  async update(id: string, outlet: CreateOutletDto, image?): Promise<Outlet> {
    let imageUrl;
    if (image) {
      // TODO: save image
      imageUrl = '';
    }
    return await this.outletModel
      .findOneAndUpdate(
        { id: id },
        imageUrl ? { ...outlet, imageUrl } : outlet,
        {
          new: true,
        },
      )
      .exec();
  }

  async findById(id: string): Promise<Outlet | null> {
    return await this.outletModel.findOne({ id }).exec();
  }

  async findAll(): Promise<Outlet[]> {
    return await this.outletModel.find().exec();
  }

  async findByUserId(userId: string): Promise<Outlet[]> {
    return await this.outletModel.find({ user: userId }).exec();
  }
}
