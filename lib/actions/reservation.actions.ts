"use server"

import { CreateReservationParams } from "@/types"
import { redirect } from 'next/navigation';
import { handleError } from '../utils';
import { connectToDatabase } from '../database';
import Reservation from '../database/models/reservation.model';
import User from '../database/models/user.model';
import { revalidatePath } from "next/cache";
import Service from "../database/models/service.model";

// populate reservation with client and service
const populateReservation = (query: any) => {
  return query
    .populate({ path: 'clientId', model: User, select: '_id firstName lastName imageUrl contactNumber email website' })
    .populate({ path: 'serviceId', model: Service, select: '_id title imageUrl location' })
}

// create reservation
export async function createReservation({ userId, serviceId, reservation, path}: CreateReservationParams) {
  try {
    await connectToDatabase();

    // check if service exists
    const service = await Service.findById(serviceId);
    if (!service) throw new Error('Service not found');

    const providerId = service.provider;
    
    // check if client exists
    const client = await User.findById(userId);
    if (!client) throw new Error('Client not found');

    // create reservation
    const newReservation = await Reservation.create({
      ...reservation,
      serviceId: serviceId,
      clientId: userId,
      providerId: providerId,
    });
    revalidatePath(path);

    return JSON.parse(JSON.stringify(newReservation));
  } catch (error) {
    handleError(error);
  }
}

// get reservation by user id using populate service
export async function getReservationsByUser(userId: string) {
  try {
    await connectToDatabase();

    const reservations = await populateReservation(Reservation.find({ clientId: userId }).sort({ createdAt: 'desc'}));
    const reservationsCount = await Reservation.countDocuments({ clientId: userId });

    if (!reservations) return null;

    return { data: JSON.parse(JSON.stringify(reservations)), count: reservationsCount };
  } catch (error) {
    handleError(error);
  }
}


// get reservation by provider id using populate service
export async function getReservationsByProvider(userId: string) {
  try {
    await connectToDatabase();

    const reservations = await populateReservation(Reservation.find({ providerId: userId }).sort({ createdAt: 'desc'}));
    const reservationsCount = await Reservation.countDocuments({ providerId: userId });
    if (!reservations) return null;

    return { data: JSON.parse(JSON.stringify(reservations)), count: reservationsCount };
  } catch (error) {
    handleError(error);
  }
}