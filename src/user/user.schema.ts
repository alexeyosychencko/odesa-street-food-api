import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Outlet } from 'src/outlet/outlet.schema';
import { Post } from 'src/post/post.schema';
import { Review } from 'src/review/review.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  _id: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop()
  isAdmin: boolean;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
  posts: Post[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Outlet' }] })
  outlets: Outlet[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }] })
  reviews: Review[];
}

export const UserShema = SchemaFactory.createForClass(User);

// example: get user with a outles
// export const postSchema: Schema = new Schema<User>({
//   id: String,
//   title: String,
//   userId: String,
// }, {
//   timestamps: true,
//   toJSON: {
//     virtuals: true,
//   },
// });

// postSchema.virtual('outlets', {
//   ref: 'Outlet',
//   localField: '_id',
//   foreignField: 'userId',
//   justOne: false,
// });
