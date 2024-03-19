import { Document, Schema, model, models } from "mongoose";

export interface IService extends Document {
  title: string;
  description?: string;
  location?: string;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: number; // Optimized to number for calculations
  isFree: boolean;
  url?: string;
  categoryId: Schema.Types.ObjectId;
  providerId: Schema.Types.ObjectId;
}

const ServiceSchema = new Schema<IService>({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, required: true }, // Consider if default Date.now is appropriate
  endDateTime: { type: Date, required: true }, // Consider if default Date.now is appropriate
  price: { type: Number, required: true }, // Changed to Number
  isFree: { type: Boolean, default: false },
  url: { type: String },
  categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  providerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true }); // Enables createdAt and updatedAt fields automatically

const Service = models.Service || model<IService>('Service', ServiceSchema);

// Define a TypeScript type for use in API responses or client-side interactions
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
