import React from 'react'
import { StarFilled } from '@/public/assets/icons/StarFilled';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceItem } from '@/lib/database/models/service.model';
import { dummmyRatingReviews } from '@/constants/dummyReviews';
import { dummyUsers } from '@/constants/dummyUsers';

const ServiceReviews = ({ service }: { service: ServiceItem }) => {


    const serviceReviews = dummmyRatingReviews.filter(review => review.service._id === service._id);
    console.log("ServiceReviews.ts: ", serviceReviews);

    // service.ratingReviewIDs;


    return (
        <section className="wrapper my-8 flex flex-col gap-2 md:gap-12">
            <h2 className="h2-bold">Reviews</h2>

            {serviceReviews.length === 0 ? (
                <p>No reviews yet</p>
            ) : (
                // printe all of them
                serviceReviews.map((review, index) => {

                    const client = dummyUsers.find(user => user._id === review.clientID);

                    return (
                        <div key={index} className="p-4">
                            <div className='flex'>
                                <div className="w-7 h-7 mr-3 border border-black rounded-full flex items-center justify-center">
                                    <Image priority src={client?.imageURL ?? ''} alt="Profile" width={28} height={28} className="rounded-full" />
                                </div>
                                <h3 className="text-lg font-medium">{client?.firstName} {client?.lastName}</h3>
                            </div>
                            <div className="flex items-center gap-2 my-2">
                                {Array.from({ length: review.rating }, (_, i) => (
                                    <StarFilled key={i} className="w-5 h-5 text-yellow-500" />
                                ))}
                            </div>
                            <p className="text-gray-700">{review.review}</p>
                        </div>
                    );
                })
            )}

            {/* Button to All Reviews */}

            <Link href={`/services/${service._id}/reviews`} className="text-primary-foreground/80 flex justify-end p-medium-16 whitespace-nowrap">
                See All Reviews &gt;
            </Link>
        </section>

    )
}

export default ServiceReviews