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
  stripeId: string;
  totalAmount: number;
  reservationDate: Date;
  clientId: IUserRef;
  serviceId: IServiceRef;
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

const ReservationSchema = new Schema<IReservation>({
  stripeId: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  reservationDate: { type: Date, required: true },
  clientId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
  notes: String,
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'completed', 'cancelled'], 
    default: 'pending' 
  },
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
  service: { _id: string, title: string, image: string, location: string };
  date: string;
  notes: string;
  status: string;
}

export default Reservation;
