import { connectToDatabase } from '@/lib/database';
import { NextResponse } from 'next/server';

import Category from '@/lib/database/models/category.model';
import User from '@/lib/database/models/user.model';
import Service from '@/lib/database/models/service.model';
import Reservation from '@/lib/database/models/reservation.model';

import { createCategory } from '@/lib/actions/category.actions';
import { createUser, getAllUsers, getUserById } from '@/lib/actions/user.actions';
import { createService, getServiceByTitle } from '@/lib/actions/service.actions';
import { createReservation } from '@/lib/actions/reservation.actions';

import { dummyCategories } from '@/constants/dummyCategories';
import { dummyUsers } from '@/constants/dummyUsers';
import { dummyServices } from '@/constants/dummyServices';
import { dummyReservations } from '@/constants/dummyReservations';

let adminID = "6618e3348cdeb4b036e920c2";

// main function
export async function POST(req: Request) {
    console.log('Seeding database');

    // Delete everything
    await deleteAllServices();
    await deleteAllUsers();
    await deleteAllReservations();

    // Create everything 
    await createAllUsers(dummyUsers);

    return NextResponse.json({ message: 'OK' });
}

/*******************************************************************
 *  Users
 *******************************************************************/
const createAllUsers = async (dummyUsers: any[]) => {

    // create users and relationships
    for (let i = 0; i < dummyUsers.length; i++) {
        const user = dummyUsers[i];
        const createdUser = await createUser(user);

        console.log('createdUser:', createdUser);

        // create services based on the user
        if (createdUser.serviceIDs.length > 0) {
            for (let j = 0; j < createdUser.serviceIDs.length; j++) {
                const service = dummyServices.find(service => service._id === createdUser.serviceIDs[j]);

                const createdService = await createService({
                    service: service.params,
                    userId: createdUser._id,
                    path: '/profile'
                })

                console.log('createdService:', createdService);
            }
        }
    }


    // create reservations based on the user
    const usersFromDB = await getAllUsers();
    for (let i = 0; i < usersFromDB.length; i++) {

        const user = usersFromDB[i];

        console.log('user:', user);
        if (user.reservationIDs.length > 0) {
            for (let j = 0; j < user.reservationIDs.length; j++) {
                const reservation = dummyReservations.find(reservation => reservation._id === user.reservationIDs[j]);
                const serviceTitle = dummyServices.find(service => service._id === reservation.params.serviceId).params.title;
                const service = await getServiceByTitle(serviceTitle); // Await the getServiceByTitle function call

                const createdReservation = await createReservation({
                    reservation: reservation.params,
                    serviceId: service._id,  // Access the _id property after awaiting the getServiceByTitle function call
                    userId: user._id,
                    path: '/services'
                })

                console.log('createdReservation:', createdReservation);
            }
        }
    }

    // create admins' services
    const admin = await getUserById(adminID);
    if (admin && admin.serviceIDs.length > 0) {
        for (let i = 0; i < admin.serviceIDs.length; i++) {
            const service = dummyServices.find(service => service._id === admin.serviceIDs[i]);
            const createdService = await createService({
                service: service.params,
                userId: adminID,
                path: '/profile'
            })
            console.log('createdService:', createdService);
        }
    }

    // create admins' reservations
    // if (admin && admin.reservationIDs.length > 0) {
    //     for (let i = 0; i < admin.reservationIDs.length; i++) {
    //         const reservation = dummyReservations.find(reservation => reservation._id === admin.reservationIDs[i]);
    //         const serviceTitle = dummyServices.find(service => service._id === reservation.params.serviceId).params.title;
    //         const service = await getServiceByTitle(serviceTitle); // Await the getServiceByTitle function call

    //         const createdReservation = await createReservation({
    //             reservation: reservation.params,
    //             serviceId: service._id, // Access the _id property after awaiting the getServiceByTitle function call
    //             userId: adminID,
    //             path: '/user'
    //         })
    //         console.log('createdReservation:', createdReservation);
    //     }
    // }

    return NextResponse.json({ message: 'OK', user: dummyUsers });
}

const deleteAllUsers = async () => {
    console.log('Deleting all users except for the first user');

    try {
        await connectToDatabase();
        const deleted = await User.deleteMany({ _id: { $ne: adminID } });
        if (deleted) {
            console.log('Deleted all users', deleted);
        }
        return NextResponse.json({ message: 'OK', user: deleted })
    } catch (error) {
        console.error('Error deleting all users:', error);
        return NextResponse.json({ message: 'Error', error: error })
    }
}

/*******************************************************************
 *  Services
 *******************************************************************/
const deleteAllServices = async () => {
    console.log('Deleting all services');
    try {
        await connectToDatabase();
        const deleted = await Service.deleteMany({});
        if (deleted) {
            console.log('Deleted all services', deleted);
        }
        return NextResponse.json({ message: 'OK', service: deleted })
    } catch (error) {
        console.error('Error deleting all services:', error);
        return NextResponse.json({ message: 'Error', error: error })
    }
}

/*******************************************************************
 *  Reservations
 *******************************************************************/

const deleteAllReservations = async () => {
    console.log('Deleting all reservations');
    try {
        await connectToDatabase();
        const deleted = await Reservation.deleteMany({});
        if (deleted) {
            console.log('Deleted all reservations', deleted);
        }
        return NextResponse.json({ message: 'OK', reservation: deleted })
    } catch (error) {
        console.error('Error deleting all reservations:', error);
        return NextResponse.json({ message: 'Error', error: error })
    }
}