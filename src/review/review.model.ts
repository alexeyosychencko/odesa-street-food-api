export class ReviewModel {
  outletId: string; // identifier for the outlet that the review is for
  userId: string; // identifier for the user who wrote the review
  ratingTaste: number; // rating given by the user (e.g. 1 to 5 stars)
  ratingClean: number; // rating given by the user (e.g. 1 to 5 stars)
  ratingPolite: number; // rating given by the user (e.g. 1 to 5 stars)
  text: string; // main text of the review
  createdAt: Date; // timestamp for when the review was created
}
