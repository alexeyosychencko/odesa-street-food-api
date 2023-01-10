export class PostModel {
  _id: string;
  userId: string; // identifier for the user who wrote the post
  title: string; // title for the post
  body: string; // main text of the post
  imageUrl: string; // optional URL for an image associated with the post
  createdAt: Date; // timestamp for when the post was created
  updatedAt: Date; // timestamp for when the post was last updated
}
