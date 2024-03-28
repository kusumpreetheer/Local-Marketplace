import { ServiceItem } from '@/lib/database/models/service.model';

export const dummyServices: any[] = [
    {
        _id: "65ff3eee12b684b7c98f579c",
        title: "Guitar Tutor",
        description: "I am a guitar tutor and I teach guitar to people who want to learn guitar",
        imageUrl: "https://picsum.photos/seed/picsum/700/300",
        url: "https://www.chris.com",
        location: "123",
        provider: {
            _id: "65fe9a5396346912b7163251",
            firstName: "Chris",
            lastName: "K",
            location: "Calgary, AB",
            imageUrl: "",
            contactNumber: "587 587 5877",
            email: "chrisk@gmail.com",
            website: "chris.com",
        },
        servicesOffered: {
            lesson1: {
                title: "Guitar Tutor",
                price: "100",
            },
            lesson2: {
                title: "Guitar Tutor",
                price: "200",
            },
            lesson3: {
                title: "Guitar Tutor",
                price: "300",
            },
            lesson4: {
                title: "Guitar Tutor",
                price: "400",
            },
        },
        averageRating: 3.2,
        totalReviews: 12,
        ratingReviewIDs: [],
        category: { _id: "65fe8fbcfb55d63b100a4d28", name: "Music" },
        bookmarked: true,
    },

    {
        _id: "1",
        title: "Wall Painter",
        description: "Hey boiii, I'm a wall painter and I paint asses on walls",
        imageUrl: "https://picsum.photos/seed/picsum/700/300",
        averageRating: 3.2,
        totalReviews: 12,
        provider: {
            _id: "65fe9a5396346912b7163251",
            firstName: "Loser",
            lastName: "Boy",
            location: "Calgary, Alberta",
            imageUrl: "https://picsum.photos/200/300",
            contactNumber: "587 587 5877",
            email: "123",
            website: "123",
        },
        servicesOffered: {
            service1: {
                title: "Painting all walls",
                price: "100",
            },
            service2: {
                title: "Mural",
                price: "200",
            },
            service3: {
                title: "Painting a single wall",
                price: "300",
            },
            service4: {
                title: "Paint somewhere else hehe 🌗",
                price: "400",
            },
        },
        ratingReviewIDs: ["1", "2", "3"],
        category: { _id: "65fe8fbcfb55d63b100a4d28", name: "Home" },
        bookmarked: false,
    },
    {
        _id: "2",
        title: "Service2",
        description: "Description2",
        imageUrl: "https://picsum.photos/seed/picsum/500/300",
        averageRating: 3.2,
        totalReviews: 12,
        provider: {
            _id: "65fe9a5396346912b7163251",
            firstName: "Jacob",
            lastName: "Chak",
            location: "123",
            imageUrl: "https://utfs.io/f/10e17672-4064-441d-a5c1-7527fe2d34b6-5482fr.jpg",
            contactNumber: "123",
            email: "123",
            website: "123",
        },
        servicesOffered: {
            service1: {
                title: "Service2",
                price: "100",
            },
            service2: {
                title: "Service2",
                price: "200",
            },
            service3: {
                title: "Service2",
                price: "300",
            },
            service4: {
                title: "Service2",
                price: "400",
            },
        },
        ratingReviewIDs: ["1", "2", "3"],
        category: { _id: "65fe8fbcfb55d63b100a4d28", name: "Music" },
        bookmarked: true,
    },
    {
        _id: "3",
        title: "Ass Painter",
        description: "Hey boiii, I'm a wall painter and I paint asses on walls",
        imageUrl: "https://picsum.photos/seed/picsum/200/300",
        averageRating: 3.2,
        totalReviews: 12,
        provider: {
            _id: "65fe9a5396346912b7163251",
            firstName: "Jacob",
            lastName: "Chak",
            location: "123",
            imageUrl: "https://utfs.io/f/10e17672-4064-441d-a5c1-7527fe2d34b6-5482fr.jpg",
            contactNumber: "123",
            email: "123",
            website: "123",
        },
        servicesOffered: {
            service1: {
                title: "Painting all walls",
                price: "100",
            },
            service2: {
                title: "Mural",
                price: "200",
            },
            service3: {
                title: "Painting a single wall",
                price: "300",
            },
            service4: {
                title: "Paint somewhere else hehe 🌗",
                price: "400",
            },
        },
        ratingReviewIDs: ["1", "2", "3"],
        category: { _id: "65fe8fbcfb55d63b100a4d28", name: "Home" },
        bookmarked: false,
    },
    {
        _id: "4",
        title: "Me Painter",
        description: "Hey boiii, I'm a wall painter and I paint asses on walls",
        imageUrl: "https://picsum.photos/seed/picsum/200/300",
        averageRating: 3.2,
        totalReviews: 12,
        provider: {
            _id: "65fe9a5396346912b7163251",
            firstName: "Jacob",
            lastName: "Chak",
            location: "123",
            imageUrl: "https://utfs.io/f/10e17672-4064-441d-a5c1-7527fe2d34b6-5482fr.jpg",
            contactNumber: "123",
            email: "123",
            website: "123",
        },
        servicesOffered: {
            service1: {
                title: "Painting all walls",
                price: "100",
            },
            service2: {
                title: "Mural",
                price: "200",
            },
            service3: {
                title: "Painting a single wall",
                price: "300",
            },
            service4: {
                title: "Paint somewhere else hehe 🌗",
                price: "400",
            },
        },
        ratingReviewIDs: ["1", "2", "3"],
        category: { _id: "65fe8fbcfb55d63b100a4d28", name: "Home" },
        bookmarked: true,
    }
];

export default dummyServices; // Export 'dummyServices' as the default export
