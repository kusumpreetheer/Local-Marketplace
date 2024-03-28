
import React from 'react'
import Collection from '@/components/shared/Collection'
import CommonHeader from '@/components/shared/CommonHeader'
import { StarFilled } from '@/public/assets/icons/StarFilled'
import Image from 'next/image';

const Reviews = () => {

    const reviews = [
        {
            user: {
              _id: "1",
              profileUrl: "http://example.com/profile",
              firstName: "Drew",
              lastName: "Phillips",
            },
            rating: "3",
            comment: "Hey, I like that...",
        },
        {
            user: {
              _id: "2",
              profileUrl: "http://example.com/profile",
              firstName: "Ky",
              lastName: "Newman",
            },
            rating: "5",
            comment: "Enya let's record a podcast together without drew...",
        },
        {
            user: {
              _id: "3",
              profileUrl: "http://example.com/profile",
              firstName: "Josiah",
              lastName: "",
            },
            rating: "2",
            comment: "Find yourself a real job",
        },
        {
            user: {
              _id: "4",
              profileUrl: "http://example.com/profile",
              firstName: "Drew",
              lastName: "Phillips",
            },
            rating: "3",
            comment: "Hey, I like that...",
        },
        {
            user: {
              _id: "5",
              profileUrl: "http://example.com/profile",
              firstName: "Ky",
              lastName: "Newman",
            },
            rating: "5",
            comment: "Enya let's record a podcast together without drew...",
        },
        {
            user: {
              _id: "6",
              profileUrl: "http://example.com/profile",
              firstName: "Josiah",
              lastName: "",
            },
            rating: "2",
            comment: "Find yourself a real job",
        },
    ]

    return (
        <section>
            <CommonHeader title='Reviews' />

            <section className="wrapper my-8 flex flex-col gap-2 md:gap-12">
                {reviews.map((review, index) => {
                    const rating = parseFloat(review.rating);

                    return (
                        <div key={index} className="p-4">
                            <div className='flex'>
                                <div className="w-7 h-7 mr-3 border border-black rounded-full flex items-center justify-center">
                                    <Image priority  src={review.user.profileUrl} alt="Profile" width={28} height={28} className="rounded-full" />
                                </div>
                                <h3 className="text-lg font-medium">{review.user.firstName} {review.user.lastName}</h3>
                            </div>
                            <div className="flex items-center gap-2 my-2">
                                {Array.from({ length: rating }, (_, i) => (
                                    <StarFilled key={i} className="w-5 h-5 text-yellow-500" />
                                ))}
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                        </div>
                    );
                })}
            </section>
        </section>
    )
}

export default Reviews
