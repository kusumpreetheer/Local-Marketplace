import { Document, Schema, model, models } from 'mongoose';

interface IUserRef {
  _id: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
}

interface IServiceRef {
  _id: Schema.Types.ObjectId;
  title: string;
}

// Define the IReservation interface for use in the rest of the application
export interface IReservation extends Document {
  providerId: IUserRef;
  clientId: IUserRef;
  serviceId: IServiceRef;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  selectedServices: string[];
}

const ReservationSchema = new Schema({
  providerId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true  },
  clientId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true, index: true},
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'completed', 'cancelled'], 
    default: 'pending',
    required: true
  },
  selectedServices: { type: [String], required: false },
}, { timestamps: true });

const Reservation = models.Reservation || model<IReservation>('Reservation', ReservationSchema);

// Define the IReservationItem type for use in API responses or elsewhere in the application
export type ReservationItem = {
  _id: string;
  createdAt: Date;
  stripeId: string;
  totalAmount: number; 
  reservationDate: Date;
  clientId: { _id: string, firstName: string, lastName: string };
  serviceId: { _id: string, title: string, imageUrl: string, location: string };
  date: string;
  notes: string;
  status: string;
}

export default Reservation;