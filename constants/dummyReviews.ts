import { RatingReviewItem } from '@/lib/database/models/ratingReview.model';

export const dummmyRatingReviews: RatingReviewItem[] = [
    {
        _id: "1",
        service: {
            _id: "1",
            title: "Service 1",
            provider: "Mollalem",
            imageUrl: "https://picsum.photos/id/237/200/300"
        },
        clientID: "1",
        rating: 3,
        review: "Service was good",
        createdAt: new Date(),
        helpfulCount: 0,
        verifiedPurchase: true,
        providerResponse: {
            response: "Find yourself a real job",
            respondedAt: new Date(),
        },
    },
    {
        _id: "2",
        service: {
            _id: "2",
            title: "Service 2",
            provider: "Enya",
            imageUrl: "https://picsum.photos/id/237/200/300"
        },
        clientID: "1",
        rating: 5,
        review: "Enya let's record a podcast together without drew and josh and see how it goes :). I'm down",
        createdAt: new Date(),
        helpfulCount: 0,
        verifiedPurchase: true,
        providerResponse: {
            response: "I'm down",
            respondedAt: new Date(),
        },
    },
    {
        _id: "3",
        service: {
            _id: "3",
            title: "Service 3",
            provider: "Mollalem",
            imageUrl: "https://picsum.photos/id/237/200/300"
        },
        clientID: "3",
        rating: 4,
        review: "Service was good",
        createdAt: new Date(),
        helpfulCount: 0,
        verifiedPurchase: true,
        providerResponse: {
            response: "Thanks for the review",
            respondedAt: new Date(),
        },
    },
    {
        _id: "4",
        service: {
            _id: "1",
            title: "Service 1",
            provider: "Mollalem",
            imageUrl: "https://picsum.photos/id/237/200/300"
        },
        clientID: "4",
        rating: 2,
        review: "Service was good",
        createdAt: new Date(),
        helpfulCount: 0,
        verifiedPurchase: true,
        providerResponse: {
            response: "Thanks for the review",
            respondedAt: new Date(),
        },
    }
];

export default dummmyRatingReviews;
