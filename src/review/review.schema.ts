import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Outlet } from 'src/outlet/outlet.schema';
import { User } from 'src/user/user.schema';

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {
  @Prop()
  ratingTaste: number;

  @Prop()
  ratingClean: number;

  @Prop()
  ratingPolite: number;

  @Prop()
  text: string;

  @Prop()
  createdAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Outlet' })
  outlet: Outlet;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
