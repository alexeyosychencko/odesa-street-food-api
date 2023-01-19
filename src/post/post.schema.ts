import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/user/user.schema';

export type PostDocument = mongoose.HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop()
  title: string;

  @Prop()
  body: string;

  @Prop()
  imageUrl: string;

  @Prop()
  createdAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
