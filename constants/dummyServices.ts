import { ServiceItem } from '@/lib/database/models/service.model';

export const dummyServices: ServiceItem[] = [
    {
        _id: "1",
        title: "Wall Painter",
        description: "Hey boiii, I'm a wall painter and I paint asses on walls",
        image: [
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
        ],
        averageRating: 3.2,
        totalReviews: 12,
        serviceProvider: [
            {
                userId: "1", 
                name: "Kanye West", 
                imageURL: "https://picsum.photos/seed/picsum/200/300"
            },
            {
                userId: "2", 
                name: "Kim Kardashian", 
                imageURL: "https://picsum.photos/seed/picsum/200/300"
            }
        ],
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

    },
    {
        _id: "2",
        title: "Service2",
        description: "Description2",
        image: [
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
        ],
        averageRating: 3.2,
        totalReviews: 12,
        serviceProvider: [
            {
                userId: "1", 
                name: "Kanye West", 
                imageURL: "https://picsum.photos/seed/picsum/200/300"
            },
            {
                userId: "2", 
                name: "Kim Kardashian", 
                imageURL: "https://picsum.photos/seed/picsum/200/300"
            }
        ],
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
    },
];

export default dummyServices; // Export 'dummyServices' as the default export
