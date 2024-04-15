import { Document, Schema, model, models } from "mongoose";

export interface IReview extends Document {
  serviceID: Schema.Types.ObjectId;
  client: {
    _id: Schema.Types.ObjectId;
    firstName: string;
    lastName: string;
    imageUrl: string;
    rating: number;
    review: string;
  }
  rating: number;
  review: string;
  createdAt: Date;
  helpfulCount: number; // Count of users who found this review helpful
  verifiedPurchase: boolean; // Indicates if the review is from a verified purchase
  providerResponse?: {
    response: string;
    respondedAt: Date;
  }; // Optional response from the service provider
}

const ReviewSchema = new Schema({
  service: { type: Schema.Types.ObjectId, ref: 'Service', required: true, index: true },
  client: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true, min: 1, max: 5, index: true },
  review: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  helpfulCount: { type: Number, default: 0 },
  providerResponse: {
    response: String,
    respondedAt: Date,
  },
}, { timestamps: true });

// Compound index for optimizing queries that might filter on `serviceID` and sort by `createdAt`
ReviewSchema.index({ serviceID: 1, createdAt: -1 });

// Index for supporting queries that sort reviews based on their helpfulness
ReviewSchema.index({ serviceID: 1, helpfulCount: -1 });

const Review = models.Review || model('Review', ReviewSchema);

// Define a TypeScript type for use in API responses or client-side interactions
export type ReviewItem = {
  _id: string;
  service: { _id: string; title: string; provider: string; imageUrl: string };
  client: { _id: string; firstName: string; lastName: string; imageUrl: string; rating: number; review: string };
  rating: number;
  review: string;
  createdAt: Date;
  helpfulCount: number;
  verifiedPurchase: boolean;
  providerResponse?: {
    response: string;
    respondedAt: Date;
  };
};

export default Review;
