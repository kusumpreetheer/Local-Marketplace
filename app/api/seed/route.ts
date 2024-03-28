import { connectToDatabase } from '@/lib/database';
import { NextResponse } from 'next/server';

import Category from '@/lib/database/models/category.model';
import User from '@/lib/database/models/user.model';
import Service from '@/lib/database/models/service.model';

import { createCategory } from '@/lib/actions/category.actions';
import { createUser } from '@/lib/actions/user.actions';
import { createService } from '@/lib/actions/service.actions';

import { dummyCategories } from '@/constants/dummyCategories';
import { dummyUsers } from '@/constants/dummyUsersSeeding';
import { dummyServices } from '@/constants/dummyServicesSeeding';

// main function
export async function POST(req: Request) {
    console.log('Seeding database');

    // Categories
    await deleteAllCategories();
    await createAllCategories(dummyCategories);

    // Users
    await deleteAllUsers();
    await createAllUsers(dummyUsers);

    // Services
    await deleteAllServices();
    await createAllServices(dummyServices);

    return NextResponse.json({ message: 'OK' });
}

/**
 *  Users
 */
const createAllUsers = async (dummyUsers: any[]) => {
    console.log('Creating all users');

    // create users
    for (let i = 0; i < dummyUsers.length; i++) {
        const user = dummyUsers[i];
        await createUser(user);
    }
    return NextResponse.json({ message: 'OK', user: dummyUsers });
}

const deleteAllUsers = async () => {
    console.log('Deleting all users except for the first user');
    // const firstUser = getUserById('65fe1d847fd96b71a061aaff');


    try {
        await connectToDatabase();
        // delete all users except for the first user
        const deleted = await User.deleteMany({});
        if (deleted) {
            console.log('Deleted all users', deleted);
        }
        return NextResponse.json({ message: 'OK', user: deleted })
    } catch (error) {
        console.error('Error deleting all users:', error);
        return NextResponse.json({ message: 'Error', error: error })
    }
}

/**
 * Services
 */
const createAllServices = async (dummyServices: any[]) => {
    console.log('Creating all services');
    // create services
    for (let i = 0; i < dummyServices.length; i++) {
        const service = dummyServices[i];
        await createService(service);
    }
    return NextResponse.json({ message: 'OK', service: dummyServices });
}

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

/**
 *  Categories
 */
const createAllCategories = async (dummyCategories: any[]) => {
    console.log('Creating all categories');
    // create categories
    for (let i = 0; i < dummyCategories.length; i++) {
        
        const categoryName = dummyCategories[i].name;
        await createCategory({categoryName});
    }
    return NextResponse.json({ message: 'OK', category: dummyCategories });
}

const deleteAllCategories = async () => {
    console.log('Deleting all categories');
    try {
        await connectToDatabase();
        const deleted = await Category.deleteMany({});
        if (deleted) {
            console.log('Deleted all categories', deleted);
        }
        return NextResponse.json({ message: 'OK', category: deleted })
    } catch (error) {
        console.error('Error deleting all categories:', error);
        return NextResponse.json({ message: 'Error', error: error })
    }
}