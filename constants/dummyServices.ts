import { ServiceItem } from '@/lib/database/models/service.model';

export const dummyServices: any[] = [
    {
        _id: "1",
        title: "Guitar Tutor",
        description: "I am a guitar tutor and I teach guitar to people who want to learn guitar",
        imageUrl: "https://source.unsplash.com/person-playing-guitar-fCEJGBzAkrU",
        url: "https://www.chrisdlake.com",
        location: "123",
        provider: {
            _id: "65fe9a5396346912b7163251",
            firstName: "Chris do",
            lastName: "Jake",
            location: "Calgary, AB",
            imageUrl: "https://source.unsplash.com/building-beside-body-of-water-during-golden-hour-aNoP6f4P_nY",
            contactNumber: "587-587-5877",
            email: "chrisdojacob@gmail.com",
            website: "chrisd.com",
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
        _id: "2",
        title: "Cooking Classes",
        description: "Join our cooking classes to learn delicious recipes from around the world, taught by professional chefs.",
        imageUrl: "https://source.unsplash.com/woman-in-black-and-white-striped-long-sleeve-shirt-holding-stainless-steel-bowl-UyEmagArOLY",
        url: "https://www.culinarydelights.com",
        location: "321 Elm Avenue, Anycity, USA",
        provider: {
            _id: "65fe9a5396346912b7163254",
            firstName: "Julia",
            lastName: "Cook",
            location: "Chicago, IL",
            imageUrl: "https://source.unsplash.com/woman-in-black-long-sleeve-shirt-carrying-girl-in-pink-jacket-tHLCjhDCw3M",
            contactNumber: "555-123-4567",
            email: "julia@culinarydelights.com",
            website: "culinarydelights.com",
        },
        servicesOffered: {
            lesson1: {
                title: "Italian Cuisine Masterclass",
                price: "80",
            },
            lesson2: {
                title: "Asian Fusion Cooking",
                price: "85",
            },
            lesson3: {
                title: "French Pastry Workshop",
                price: "90",
            },
            lesson4: {
                title: "Vegetarian Cooking Essentials",
                price: "75",
            },
        },
        averageRating: 4.9,
        totalReviews: 30,
        ratingReviewIDs: [],
        category: { _id: "65fe8fbcfb55d63b100a4d2a", name: "Food & Cooking" },
        bookmarked: true,
    },
    {
        _id: "3",
        title: "Personal Trainer",
        description: "Certified personal trainer offering customized workout plans and one-on-one training sessions to help you achieve your fitness goals.",
        imageUrl: "https://source.unsplash.com/woman-in-black-tank-top-and-black-leggings-doing-yoga-E8VOttj22s4",
        url: "https://www.fitforyou.com",
        location: "456 Pine Street, Anycity, USA",
        provider: {
            _id: "65fe9a5396346912b7163255",
            firstName: "Max",
            lastName: "Fit",
            location: "Miami, FL",
            imageUrl: "https://source.unsplash.com/man-in-blue-crew-neck-shirt-4uj3iZ5m084",
            contactNumber: "123-789-4560",
            email: "max@fitforyou.com",
            website: "fitforyou.com",
        },
        servicesOffered: {
            lesson1: {
                title: "Strength Training",
                price: "70",
            },
            lesson2: {
                title: "HIIT Workouts",
                price: "75",
            },
            lesson3: {
                title: "Weight Loss Programs",
                price: "80",
            },
            lesson4: {
                title: "Functional Fitness Training",
                price: "85",
            },
        },
        averageRating: 4.7,
        totalReviews: 28,
        ratingReviewIDs: [],
        category: { _id: "65fe8fbcfb55d63b100a4d29", name: "Fitness & Wellness" },
        bookmarked: true,
    },
    {
        _id: "4",
        title: "Language Tutor",
        description: "Experienced language tutor offering personalized lessons in Spanish, French, and German.",
        imageUrl: "https://source.unsplash.com/woman-in-black-sleeveless-top-h6gCRTCxM7o",
        url: "https://www.languagemasters.com",
        location: "789 Maple Street, Anytown, USA",
        provider: {
            _id: "65fe9a5396346912b7163256",
            firstName: "Sophie",
            lastName: "Linguist",
            location: "Seattle, WA",
            imageUrl: "https://source.unsplash.com/woman-in-blue-tank-top-standing-beside-white-wall-TXxiFuQLBKQ",
            contactNumber: "987-654-3210",
            email: "sophie@languagemasters.com",
            website: "languagemasters.com",
        },
        servicesOffered: {
            lesson1: {
                title: "Beginner Spanish",
                price: "40",
            },
            lesson2: {
                title: "Intermediate French",
                price: "50",
            },
            lesson3: {
                title: "Advanced German",
                price: "60",
            },
            lesson4: {
                title: "Conversation Practice",
                price: "45",
            },
        },
        averageRating: 4.6,
        totalReviews: 22,
        ratingReviewIDs: [],
        category: { _id: "65fe8fbcfb55d63b100a4d2b", name: "Education & Tutoring" },
        bookmarked: true,
    },
    {
        _id: "65ff3eee12b684b7c98f57a1",
        title: "Photography Lessons",
        description: "Professional photography lessons tailored to your skill level, covering everything from basic camera techniques to advanced composition.",
        imageUrl: "https://source.unsplash.com/man-on-top-of-mountain-taking-pictures-jg-6ARMiaPM",
        url: "https://www.shuttermasters.com",
        location: "123 Main Street, Anytown, USA",
        provider: {
            _id: "65fe9a5396346912b7163257",
            firstName: "Alex",
            lastName: "Shutter",
            location: "San Francisco, CA",
            imageUrl: "https://source.unsplash.com/man-holding-up-canon-dslr-camera-jUAcCtbMb0k",
            contactNumber: "555-123-7890",
            email: "alex@shuttermasters.com",
            website: "shuttermasters.com",
        },
        servicesOffered: {
            lesson1: {
                title: "Introduction to Photography",
                price: "60",
            },
            lesson2: {
                title: "Portrait Photography",
                price: "70",
            },
            lesson3: {
                title: "Landscape Photography",
                price: "75",
            },
            lesson4: {
                title: "Photo Editing Techniques",
                price: "80",
            },
        },
        averageRating: 4.9,
        totalReviews: 35,
        ratingReviewIDs: [],
        category: { _id: "65fe8fbcfb55d63b100a4d2c", name: "Arts & Crafts" },
        bookmarked: true,
    }
];

export default dummyServices; // Export 'dummyServices' as the default export
