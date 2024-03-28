import { UserItem } from '@/lib/database/models/user.model';

export const dummyUsers: UserItem[] = [
    {
        _id: "1",
        clerkId: "clerkId1",
        imageUrl: "https://picsum.photos/id/237/200/300",
        email: "example@example.com",
        website: "enyaumanzor.com",
        username: "enyaumanzor",
        firstName: "Enya",
        lastName: "Umanzor",
        location: "24 whitecres Ave, Calgary AB",
        contactNumber: "587 946 5893",
        serviceIDs: ["1", "2"],
        ratingReviewIDs: ["1", "2"],
    },
    {
        _id: "2",
        clerkId: "clerkId2",
        imageUrl: "https://picsum.photos/id/237/200/300",
        email: "example2@example.com",
        website: "enyaumanzor.com",
        username: "cacofelix",
        firstName: "Felix",
        lastName: "Catton",
        location: "Your mama's house",
        contactNumber: "587 946 5892",
        serviceIDs: [],
        ratingReviewIDs: [],
    },
    {
        _id: "3",
        clerkId: "clerkId3",
        imageUrl: "https://picsum.photos/id/237/200/300",
        email: "example3@example.com",
        website: "enyaumanzor.com",
        username: "username3",
        firstName: "FirstName3",
        lastName: "LastName3",
        location: "Location3",
        contactNumber: "587 946 1111",
        serviceIDs: [],
        ratingReviewIDs: [],
    },
];

export default dummyUsers;
