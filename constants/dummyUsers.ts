import { UserItem } from '@/lib/database/models/user.model';

export const dummyUsers: UserItem[] = [
    {
        _id: "1",
        clerkId: "clerkId1",
        imageUrl: "https://source.unsplash.com/man-stranding-on-straight-road-photo-during-daytime-TMgQMXoglsM",
        email: "john@example.com",
        website: "johnsmith.com",
        username: "johnsmith",
        firstName: "John",
        lastName: "Smith",
        location: "123 Oak Street, Anytown, USA",
        contactNumber: "123-456-7890",
        serviceIDs: ["1", "2"],
        ratingReviewIDs: ["1", "2"],
    },
    {
        _id: "2",
        clerkId: "clerkId2",
        imageUrl: "https://source.unsplash.com/macro-shot-of-black-haired-woman-mNSOLgnDGzA",
        email: "jane@example.com",
        website: "jass.com",
        username: "jasminedoe",
        firstName: "jasmine",
        lastName: "Dickson",
        location: "456 Maple Avenue, Sometown, USA",
        contactNumber: "987-654-3210",
        serviceIDs: [],
        ratingReviewIDs: [],
    },
    {
        _id: "3",
        clerkId: "clerkId3",
        imageUrl: "https://source.unsplash.com/man-standing-beside-wall-pAtA8xe_iVM",
        email: "sam@example.com",
        website: "samrogers.com",
        username: "samrogers",
        firstName: "Sam",
        lastName: "Rogers",
        location: "789 Pine Lane, Anycity, USA",
        contactNumber: "555-123-4567",
        serviceIDs: [],
        ratingReviewIDs: [],
    }
];

export default dummyUsers;
