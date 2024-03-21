import { ServiceItem } from '@/lib/database/models/service.model';

export const dummyServices = [
    {
        title: "Wall Painter",
        description: "Hey boiii, I'm a wall painter and I paint asses on walls",
        location: "Lagos, Nigeria",
        imageUrl: [
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
        ],
        averageRating: 3.2,
        totalReviews: 12,
        providers: ["1", "2"],
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
        title: "Service2",
        description: "Description2",
        location: "Lagos, Nigeria",
        imageUrl: [
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
        ],
        averageRating: 3.2,
        totalReviews: 12,
        providers: ["3"],
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
    {
        title: "Ass Painter",
        description: "Hey boiii, I'm a wall painter and I paint asses on walls",
        location: "Lagos, Nigeria",
        imageUrl: [
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
        ],
        averageRating: 3.2,
        totalReviews: 12,
        providers: ["1"],
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
        title: "Me Painter",
        description: "Hey boiii, I'm a wall painter and I paint asses on walls",
        location: "Lagos, Nigeria",
        imageUrl: [
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
            "https://picsum.photos/seed/picsum/200/300",
        ],
        averageRating: 3.2,
        totalReviews: 12,
        providers: ["2"],
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

    }
];

export default dummyServices; // Export 'dummyServices' as the default export
