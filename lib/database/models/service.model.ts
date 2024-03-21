import { Document, Schema, model, models } from "mongoose";

export interface IService extends Document {
  title: string;
  description?: string;
  location?: string;
  imageUrl: string[];
  averageRating?: number;
  totalReviews?: number;
  providers: { _id: string, name: string }[]; 
  servicesOffered: Map<string, { title: string; price: string }>;
  ratingReviewIDs: string[]; 
}

const ServiceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  imageUrl: { type: [String], required: true },
  averageRating: { type: Number, required: false },
  totalReviews: { type: Number, required: false },
  providers: [{ type: String, ref: 'User' }],
  servicesOffered: {
    type: Map,
    of: {
      title: { type: String, required: true },
      price: { type: String, required: true }
    }
  },
  ratingReviewIDs: [{ type: String, ref: 'RatingReview' }]
}, { timestamps: true }); // Enables createdAt and updatedAt fields automatically

const Service = models.Service || model('Service', ServiceSchema);

// type Service Item is not updated yet
// currently this is only for the frontend 
export type ServiceItem = {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  image: string[];
  averageRating: number;
  totalReviews: number;
  serviceProvider: {
    userId: string;
    name: string;
    imageURL: string;
  }[];
  servicesOffered: {
    [key: string]: {
      title: string;
      price: string;
    };
  };
  ratingReviewIDs:string[],
};

export default Service;
