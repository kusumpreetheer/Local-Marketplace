import { Document, Schema, model, models } from "mongoose";

export interface IService extends Document {
  title: string;
  description?: string;
  location?: string;
  imageUrl: string;
  url?: string;
  provider: { _id: string, firstName: string, lastName: string }; 
  category: { _id: string, name: string }
  servicesOffered: Map<string, { title: string; price: string }>;
  ratingReviewIDs: string[]; 
  averageRating?: number;
  totalReviews?: number;
  bookmarked?: boolean;
}

const ServiceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  imageUrl: { type: String, required: true },
  url: { type: String },
  provider: { type: Schema.Types.ObjectId, ref: 'User' },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  servicesOffered: {
    type: Map,
    of: {
      title: { type: String, required: true },
      price: { type: String, required: true }
    }
  },
  ratingReviewIDs: [{ type: String, ref: 'RatingReview' }],
  averageRating: { type: Number, required: false },
  totalReviews: { type: Number, required: false },
  bookmarked: { type: Boolean, required: false }
}, { timestamps: true }); // Enables createdAt and updatedAt fields automatically

const Service = models.Service || model('Service', ServiceSchema);

// type Service Item is not updated yet
// currently this is only for the frontend 
export type ServiceItem = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  location: string;
  provider: { _id: string, firstName: string, lastName: string, imageUrl: string, name: string};
  category: { _id: string, name: string}
  servicesOffered: Map<string, { title: string; price: string }>;
  ratingReviewIDs: string[];
  averageRating?: number;
  bookmarked?: boolean;
};


export default Service;
