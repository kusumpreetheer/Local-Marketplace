import React from 'react'
import { StarFilled } from '@/public/assets/icons/StarFilled';
import Image from 'next/image';
import Link from 'next/link';
import { dummmyReviews } from '@/constants/dummyReviews';
import { dummyUsers } from '@/constants/dummyUsers';
import { Pen } from '@/public/assets/icons/Pen';
import { ReviewItem } from '@/lib/database/models/review.model';
import { IService } from '@/lib/database/models/service.model';

const ServiceReviews = ({ service, serviceReviews }: { service: IService, serviceReviews: ReviewItem[] }) => {

    return (
        <section className="wrapper my-8 flex flex-col gap-3 md:gap-6">
            <div className='flex-between'>
                <h2 className="h4-semibold">Reviews</h2>
                <Pen className="w-6 h-6 ml-auto" />
            </div>

            {serviceReviews.length === 0 ? (
                <p>No reviews yet</p>
            ) : (
                // printe only 3 of them
                serviceReviews.map((review, index) => {

                    const client = dummyUsers[0];

                    return (

                      <div key={index} className="flex flex-col py-2">
                            <div className='flex justify-start items-center'>
                                {/* profile pic */}
                                <div className="w-7 h-7 mr-3 border border-black rounded-full flex items-center justify-center overflow-hidden">
                                    <Image priority src={client?.imageUrl ?? ''} alt="Profile" width={28} height={28} className="rounded-full" />
                                </div>
                                {/* name */}
                                <h3 className="text-lg font-medium">{client?.firstName} {client?.lastName}</h3>
                                {/* date */}
                                <p className="text-grey-600 text-s ml-4">2024-02-02</p>
                            </div>
                            {/* stars */}
                            <div className="flex items-center md:gap-2 my-2">
                                {Array.from({ length: review.rating }, (_, i) => (
                                    <StarFilled key={i} className="w-5 h-5 text-yellow-500" />))}
                            </div>
                            {/* review */}
                            <p className="text-gray-700">{review.review}</p>
                        </div>
                    );
                })
            )}

            {/* Button to All Reviews */}

            <Link href={`/services/${service?._id}/reviews`} className="text-primary-foreground/80 flex justify-end p-medium-16 whitespace-nowrap">
                See All Reviews &gt;
            </Link>
        </section>

    )
}

export default ServiceReviews