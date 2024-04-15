import { ReviewItem } from '@/lib/database/models/review.model';

export const dummmyReviews: any[] = [
    // S1
    {
        _id: "1",
        param: {
            service: "1",
            client: "2",
            rating: 5,
            review: "ASAP Plumbers did an amazing job fixing my leaky faucet. They were prompt, professional, and the price was reasonable. Highly recommend!",
            createdAt: new Date(),
            helpfulCount: 3,
            providerResponse: {
                response: "Thank you so much for your kind words! We're thrilled to hear that you were satisfied with our service. Please don't hesitate to contact us again if you need any further assistance.",
                respondedAt: "2024-04-10T12:00:00.000Z"
            }
        }
    },
    {
        _id: "2",
        param: {
            service: "1",
            client: "2",
            rating: 4,
            review: "I had ASAP Plumbers install new pipes in my kitchen. The work was done efficiently, but there was a slight delay in arrival. Overall, satisfied with the service.",
            createdAt: new Date(),
            helpfulCount: 3,
            providerResponse: null,
        },
    },
    {
        _id: "3",
        param: {
            service: "1",
            client: "3",
            rating: 3,
            review: "I've used ASAP Plumbers multiple times for drain cleaning, and they never disappoint. Quick response, thorough job, and fair pricing. Highly recommended!",
            createdAt: new Date(),
            helpfulCount: 2,
            providerResponse: {
                response: "Thank you for being a loyal customer! We appreciate your continued support and trust in our services. Don't hesitate to reach out if you need assistance in the future.",
                respondedAt: new Date(),
            },
        },
    },
    // S2
    {
        _id: "4",
        param: {
            service: "2",
            client: "4",
            rating: 5,
            review: "Soph Cleaning did an exceptional job with my move-in cleaning. The team was thorough, efficient, and friendly. My new home looks sparkling clean!",
            createdAt: new Date(),
            helpfulCount: 10,
            providerResponse: {
                response: "Thank you for your glowing review! We're delighted to hear that you're satisfied with our move-in cleaning service. Welcome to your new home, and don't hesitate to reach out if you need cleaning assistance in the future.",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "5",
        param: {
            service: "2",
            client: "5",
            rating: 4,
            review: "I hired Soph Cleaning for regular cleaning services. Overall, satisfied with the cleanliness, but there were a few missed spots. Would still recommend.",
            createdAt: new Date(),
            helpfulCount: 2,
            providerResponse: null,
        },
    },
    // S3
    {
        _id: "6",
        param: {
            service: "3",
            client: "6",
            rating: 5,
            review: "Noah Lawns transformed my backyard with their lawn aeration service. The grass looks healthier and greener than ever before. Highly recommend!",
            createdAt: new Date(),
            helpfulCount: 8,
            providerResponse: {
                response: "Thank you for your wonderful feedback! We're thrilled to hear that you're enjoying the results of our lawn aeration service. Don't hesitate to contact us if you need further assistance with your lawn care needs.",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "7",
        param: {
            service: "3",
            client: "7",
            rating: 4,
            review: "I've been using Noah Lawns for lawn mowing for the past few months. Overall, satisfied with the service and the price. The lawn always looks neat and tidy.",
            createdAt: new Date(),
            helpfulCount: 2,
            providerResponse: null,
        },
    },
    {
        _id: "8",
        param: {
            service: "3",
            client: "8",
            rating: 4,
            review: "Noah Lawns did a great job with weed control in my front yard. Noticed a significant reduction in weeds after their treatment. Will definitely use their services again.",
            createdAt: new Date(),
            helpfulCount: 5,
            providerResponse: {
                response: "Thank you for your positive review! We're glad to hear that you're happy with the results of our weed control service. We look forward to serving you again in the future.",
                respondedAt: new Date(),
            },
        },
    },
    // S4
    {
        _id: "9",
        param: {
            service: "4",
            client: "9",
            rating: 5,
            review: "I recently had the Home Security System team install a security system in my home, and I'm extremely impressed with their service. The installation was smooth, and the system works flawlessly. I feel much safer now!",
            createdAt: new Date(),
            helpfulCount: 6,
            providerResponse: {
                response: "Thank you for your fantastic review! We're thrilled to hear that you're satisfied with our security system installation. Your safety and peace of mind are our top priorities.",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "10",
        param: {
            service: "4",
            client: "10",
            rating: 5,
            review: "I highly recommend the Home Security System service! They installed security cameras and an alarm system in my house, and I couldn't be happier with the results. The team was professional and efficient.",
            createdAt: new Date(),
            helpfulCount: 3,
            providerResponse: null,
        },
    },
    // S5
    {
        _id: "11",
        param: {
            service: "5",
            client: "11",
            rating: 5,
            review: "I hired the Home Organizer team to declutter and organize my kitchen, and I'm amazed at the transformation! They were professional, efficient, and the end result exceeded my expectations. Highly recommend their services!",
            createdAt: new Date(),
            helpfulCount: 4,
            providerResponse: {
                response: "Thank you for your glowing review! We're thrilled to hear that you're happy with our kitchen organization service. Don't hesitate to reach out if you need assistance with organizing any other areas of your home.",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "12",
        param: {
            service: "5",
            client: "12",
            rating: 4,
            review: "The Home Organizer team helped me declutter and organize my home office, and I'm pleased with the results. They were professional and courteous throughout the process.",
            createdAt: new Date(),
            helpfulCount: 2,
            providerResponse: null,
        },
    },
    // S6
    {
        _id: "13",
        param: {
            service: "6",
            client: "13",
            rating: 5,
            review: "I've been training with the Personal Trainer team for a few months now, and I've seen incredible progress in my fitness journey. The personalized workout plans and guidance have been instrumental in helping me reach my goals. Highly recommend!",
            createdAt: new Date(),
            helpfulCount: 3,
            providerResponse: {
                response: "Thank you for your amazing feedback! We're thrilled to hear about your progress and success with our training programs. Keep up the fantastic work, and we're here to support you every step of the way.",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "14",
        param: {
            service: "6",
            client: "14",
            rating: 4,
            review: "I've had a positive experience training with the Personal Trainer team. The workouts are challenging yet effective, and the trainers are knowledgeable and supportive.",
            createdAt: new Date(),
            helpfulCount: 2,
            providerResponse: null,
        },
    },
    {
        _id: "15",
        param: {
            service: "6",
            client: "15",
            rating: 5,
            review: "I started training with the Personal Trainer team recently, and I'm impressed with their professionalism and dedication. The workouts are challenging but tailored to my fitness level.",
            createdAt: new Date(),
            helpfulCount: 1,
            providerResponse: {
                response: "Thank you for your feedback! We're glad to hear that you're enjoying your training sessions and finding them beneficial. Keep up the great work, and feel free to reach out if you have any questions or concerns.",
                respondedAt: new Date(),
            },
        },
    },
    // S12
    {
        _id: "16",
        param: {
            service: "12",
            client: "16",
            rating: 5,
            review: "Emily Types did an outstanding job editing my manuscript. The edits were thorough and insightful, significantly improving the clarity and flow of the text. Highly recommend!",
            createdAt: new Date(),
            helpfulCount: 3,
            providerResponse: {
                response: "Thank you for your glowing review! We're thrilled to hear that you're pleased with our editing services. It was a pleasure working with you, and we look forward to assisting you with future projects.",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "17",
        param: {
            service: "12",
            client: "17",
            rating: 5,
            review: "I utilized Emily Types for proofreading my articles, and I'm satisfied with the quality of their work. The proofreading was thorough, and I appreciate the attention to detail.",
            createdAt: new Date(),
            helpfulCount: 3,
            providerResponse: {
                response: "Thank you for your wonderful review! We're thrilled to hear that your wedding day was everything you hoped for. It was a pleasure working with you to bring your vision to life. Congratulations again!",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "18",
        param: {
            service: "12",
            client: "18",
            rating: 5,
            review: "I've been using Emily Types for content development, and I'm impressed with the quality of the work delivered. They have a keen eye for detail and always exceed my expectations. Highly recommended!",
            createdAt: new Date(),
            helpfulCount: 1,
            providerResponse: {
                response: "Thank you for your kind words! We're delighted to hear that you're satisfied with our content development services. It's a pleasure working with you, and we're here to assist with your writing needs anytime.",
                respondedAt: new Date(),
            },
        },
    },
    // S18
    {
        _id: "19",
        param: {
            service: "18",
            client: "19",
            rating: 5,
            review: "Liv Legal provided me with exceptional legal consultation. They were knowledgeable, responsive, and provided valuable insights into my legal matters. Highly recommend!",
            createdAt: new Date(),
            helpfulCount: 3,
            providerResponse: {
                response: "Thank you for your glowing review! We're thrilled to hear that you were satisfied with our legal consultation services. Your satisfaction and peace of mind are our top priorities.",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "20",
        param: {
            service: "18",
            client: "20",
            rating: 4,
            review: "I used Liv Legal for contract review, and I was impressed with their attention to detail. The legal team provided thorough feedback, helping me understand the terms and implications. Overall, a great experience.",
            createdAt: new Date(),
            helpfulCount: 2,
            providerResponse: null,
        },
    },
    {
        _id: "21",
        param: {
            service: "18",
            client: "21",
            rating: 5,
            review: "Liv Legal's litigation support team helped me navigate a complex legal case. Their expertise and dedication were instrumental in achieving a favorable outcome. I'm grateful for their assistance!",
            createdAt: new Date(),
            helpfulCount: 3,
            providerResponse: {
                response: "Thank you for your kind words! We're glad we could assist you with your legal case and achieve a positive outcome. If you ever need legal support in the future, don't hesitate to reach out to us.",
                respondedAt: new Date(),
            },
        },
    },
    // S24
    {
        _id: "22",
        param: {
            service: "22",
            client: "22",
            rating: 5,
            review: "I recently purchased a landscape painting from Fine Art Painting, and I'm thrilled with the quality and beauty of the artwork. It perfectly captures the essence of nature and adds a unique touch to my home decor. Highly recommend!",
            createdAt: new Date(),
            helpfulCount: 3,
            providerResponse: {
                response: "Thank you for your wonderful review! We're delighted to hear that you're satisfied with the landscape painting you purchased from us. Your appreciation for our artwork means a lot, and we hope it continues to bring joy to your home.",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "23",
        param: {
            service: "23",
            client: "23",
            rating: 4,
            review: "I recently acquired an oil painting from Fine Art Painting, and I must say, it's a stunning piece of art. The colors and details are exquisite. The only reason I'm not giving it a perfect score is because of the slightly delayed delivery.",
            createdAt: new Date(),
            helpfulCount: 2,
            providerResponse: null,
        },
    },
    {
        _id: "24",
        param: {
            service: "24",
            client: "24",
            rating: 5,
            review: "I commissioned Fine Art Painting for a custom portrait painting, and I couldn't be happier with the result. The artist captured every detail flawlessly, and the final piece exceeded my expectations. Thank you!",
            createdAt: new Date(),
            helpfulCount: 1,
            providerResponse: {
                response: "Thank you for your kind words! We're thrilled to hear that you're pleased with the custom portrait painting we created for you. It was a pleasure working on your project, and we appreciate your support for our artwork.",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "25",
        param: {
            service: "24",
            client: "25",
            rating: 5,
            review: "I hired the Event Planner team for my wedding, and they did an exceptional job bringing my vision to life. The attention to detail, creativity, and professionalism were outstanding. Highly recommend their services!",
            createdAt: new Date(),
            helpfulCount: 3,
            providerResponse: {
                response: "Thank you for your glowing review! We're thrilled to hear that your wedding day was everything you hoped for. It was a pleasure working with you to create a memorable and beautiful event.",
                respondedAt: new Date(),
            },
        },
    },
    // S30
    {
        _id: "26",
        param: {
            service: "30",
            client: "26",
            rating: 5,
            review: "I recently used Moving Services for my local move, and I couldn't be happier with the experience. The team was punctual, efficient, and handled all my belongings with care. They made the entire process stress-free!",
            createdAt: new Date(),
            helpfulCount: 3,
            providerResponse: {
                review: "Thank you for your fantastic review! We're thrilled to hear that you were satisfied with our moving services. Your satisfaction is our priority, and we're here to assist you with any future moves.",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "27",
        param: {
            service: "30",
            client: "27",
            rating: 4,
            review: "I hired Moving Services for a long-distance move, and overall, I was satisfied with their performance. The movers were professional and handled my items with care. However, there were some delays in the delivery timeline",
            createdAt: new Date(),
            helpfulCount: 2,
            providerResponse: null,
        },
    },
    {
        _id: "28",
        param: {
            service: "30",
            client: "28",
            rating: 5,
            review: "Moving Services provided exceptional packing and unpacking services for my relocation. The team was efficient and organized, ensuring that all my belongings were packed securely. I highly recommend their services!",
            createdAt: new Date(),
            helpfulCount: 1,
            providerResponse: {
                response: "Thank you for your glowing review! We're delighted to hear that you were satisfied with our packing and unpacking services. It was our pleasure to assist you with your relocation.",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "29",
        param: {
            service: "30",
            client: "29",
            rating: 4,
            review: "I utilized Moving Services for furniture assembly at my new location. The team did a great job assembling the furniture, but there were some minor issues with communication regarding scheduling.",
            createdAt: new Date(),
            helpfulCount: 1,
            providerResponse: null,
        },
    },
    // S36
    {
        _id: "30",
        param: {
            service: "36",
            client: "30",
            rating: 5,
            review: "I worked with Application Development for the creation of a web application, and I'm extremely impressed with the results. They understood my requirements perfectly and delivered a high-quality product within the specified timeframe. Highly recommend!",
            createdAt: new Date(),
            helpfulCount: 3,
            providerResponse: {
                response: "Thank you for your fantastic review! We're thrilled to hear that you're satisfied with the web application we developed for you. Your recommendation means a lot to us, and we're here to support your future endeavors.",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "31",
        param: {
            service: "36",
            client: "31",
            rating: 4,
            review: "I used the Catering team for a corporate luncheon, and the food was delicious. The team was professional and accommodating, but there were some minor delays in the service.",
            createdAt: new Date(),
            helpfulCount: 2,
            providerResponse: null,
        },
    },
    {
        _id: "32",
        param: {
            service: "36",
            client: "32",
            rating: 5,
            review: "I hired Application Development for iOS app development, and they did a commendable job. The app's functionality is great, and it meets most of my requirements. However, there were a few minor bugs that needed fixing.",
            createdAt: new Date(),
            helpfulCount: 1,
            providerResponse: {
                response: "Thank you for your feedback! We're glad to hear that you're satisfied with the iOS app we developed for you. We appreciate your input on the bugs and will work to address them promptly.",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "33",
        param: {
            service: "36",
            client: "33",
            rating: 5,
            review: "I collaborated with Application Development for web application development, and I'm extremely impressed with their professionalism and expertise. They provided valuable insights and delivered an exceptional product.",
            createdAt: new Date(),
            helpfulCount: 1,
            providerResponse: null,
        },
    },
    // S42
    {
        _id: "34",
        param: {
            service: "42",
            client: "34",
            rating: 5,
            review: "I visited the General Physician for a routine checkup, and I'm impressed with the level of care I received. The physician was thorough, attentive, and addressed all my concerns. I highly recommend their services for comprehensive healthcare.",        
            createdAt: new Date(),
            helpfulCount: 3,
            providerResponse: {
                response: "Thank you for your wonderful review! We're delighted to hear that you had a positive experience during your routine checkup. Your health and well-being are our top priorities, and we're here to provide you with continued support.",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "35",
        param: {
            service: "42",
            client: "35",
            rating: 5,
            review: "I have been under the care of the General Physician for chronic disease management, and I am highly satisfied with the treatment provided. The physician takes a personalized approach to my care and ensures that my health needs are met effectively.",
            createdAt: new Date(),
            helpfulCount: 1,
            providerResponse: {
                response: "Thank you for your positive feedback! We're pleased to hear that you're satisfied with the chronic disease management provided by our clinic. Your health and well-being are our priorities, and we're committed to providing you with the best possible care.",
                respondedAt: new Date()
            },
        },
    },
    {
        _id: "36",
        param: {
            service: "42",
            client: "36",
            rating: 4,
            review: "I consulted the General Physician for a medical consultation, and I found the experience satisfactory. The physician provided clear explanations and recommendations for my health concerns. However, the waiting time at the clinic was a bit longer than expected.",
            createdAt: new Date(),
            helpfulCount: 2,
            providerResponse: null,
        },
    },
    // S48
    {
        _id: "37",
        param: {
            service: "48",
            client: "37",
            rating: 4,
            review: "I've been taking beginner guitar lessons with Chris, and I'm pleased with my progress so far. He's patient, knowledgeable, and makes learning guitar enjoyable. I look forward to continuing my lessons and improving my skills!",
            createdAt: new Date(),
            helpfulCount: 3,
            providerResponse: {
                response: "Thank you for your positive review! I'm glad to hear that you're enjoying your beginner guitar lessons and making progress. Keep up the good work, and I'm here to support you on your musical journey!",
                respondedAt: new Date(),
            },
        },
    },
    {
        _id: "38",
        param: {
            service: "48",
            client: "38",
            rating: 4,
            review: "I took intermediate guitar lessons with Chris, and while he's knowledgeable, I found the pacing of the lessons a bit fast for my liking. It would be helpful if he could adjust the pace to accommodate different learning speeds.",
            createdAt: new Date(),
            helpfulCount: 2,
            providerResponse: null,
        },
    },
    {
        _id: "39",
        param: {
            service: "48",
            client: "39",
            rating: 5,
            review: "Chris's advanced guitar lessons have been invaluable in my songwriting journey. He has a deep understanding of music theory and technique, and his guidance has helped me elevate my compositions to new heights. Highly recommended!",
            createdAt: new Date(),
            helpfulCount: 1,
            providerResponse: {
                response: "Thank you for your glowing review! I'm thrilled to hear that my advanced guitar lessons have been beneficial for your songwriting journey. It's been a pleasure working with you, and I look forward to helping you further develop your musical skills!",
                respondedAt: new Date(),
            },
        },
    },
];

export default dummmyReviews;
