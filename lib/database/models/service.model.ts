import { Document, Schema, model, models } from "mongoose";

export interface IService extends Document {
  title: string;
  description?: string;
  location?: string;
  imageUrl?: string;
  url?: string;
  provider: { _id: string, firstName: string, lastName: string, imageUrl: string}; 
  category: { _id: string, name: string }
  servicesOffered: { id: string, title: string, description: string, price: string }[]; 
  reviewIDs: string[]; 
  averageRating?: number;
  totalReviews?: number;
  bookmarked?: boolean;
}

const ServiceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  imageUrl: { type: String, required: false },
  url: { type: String },
  provider: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  servicesOffered: [{ id: String, title: String, description: String, price: String }],
  reviewIDs: [{ type: String, ref: 'Review' }],
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
  reviewIDs: string[];
  averageRating?: number;
  bookmarked?: boolean;
};


export default Service;
