import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Review } from 'src/review/review.schema';
import { User } from 'src/user/user.schema';

export type OutletDocument = HydratedDocument<Outlet>;

export enum DistrictCategory {
  Center,
  Tairova,
  Posyolok,
  Slobodka,
}

@Schema()
export class Outlet {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  menu?: string;

  @Prop()
  cuisine: string;

  @Prop()
  website?: string;

  @Prop()
  phoneNumber?: string;

  @Prop({ enum: DistrictCategory })
  district: DistrictCategory;

  @Prop()
  address: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  timeOpenSek?: number;

  @Prop()
  timeCloseSek?: number;

  @Prop()
  photoUrl?: string;

  @Prop()
  createdAt: Date;

  @Prop()
  lastUpdate: Date;

  @Prop()
  calculateTasteRating: number;

  @Prop()
  calculateCleanRating: number;

  @Prop()
  calculatePoliteRating: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }] })
  reviews: Review[];
}

export const OutletSchema = SchemaFactory.createForClass(Outlet);
