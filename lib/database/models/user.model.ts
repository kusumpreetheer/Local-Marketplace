import { Document, Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true }, // use clerkId as the unique identifier, after the user has signed up, the webhook will send the clerkId to the server (see app/api/webhook/clerk/route.ts)
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  imageUrl: { type: String, required: true },
  website: { type: String, required: false },
  location: { type: String, required: false },
  contactNumber: { type: String, required: false, unique: true },
  serviceIDs: [{ type: String,  required: false, ref: 'Service' }],
  ratingReviewIDs: [{ type: String, required: false, ref: 'RatingReview' }],
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

const User = models.User || model('User', UserSchema);

// type Service Item is not updated yet
// currently this is only for the frontend 
export type UserItem = {
  _id: string;
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  website: string; 
  location: string;
  contactNumber: string;
  serviceIDs: string[]; // Assuming conversion to string IDs for external use
  ratingReviewIDs: string[]; // Assuming conversion to string IDs for external use
};

export default User;
