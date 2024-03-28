"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { BookmarkEmpty } from '@/public/assets/icons/BookmarkEmpty';
import { Clock } from '@/public/assets/icons/Clock';
import { StarEmpty } from '@/public/assets/icons/StarEmpty';
import { ServiceItem } from '@/lib/database/models/service.model';
import Link from 'next/link';
import { RatingReviewItem } from '@/lib/database/models/ratingReview.model';
import { ReservationItem } from '@/lib/database/models/reservation.model';
import dummyUsers from '@/constants/dummyUsers';
import { LocationPin } from '@/public/assets/icons/LocationPin';
import { BookmarkFilled } from '@/public/assets/icons/BookmarkFilled';
import { Separator } from "@/components/ui/separator"

type CardProps = {
    direction?: 'horizontal' | 'vertical'
    itemType?: 'service' | 'reservation' | 'review'
    item?: ServiceItem | RatingReviewItem | ReservationItem
    hasButton?: boolean
    bookmarked?: boolean
};

const Card = ({
    direction,
    itemType,
    item,
    hasButton,
    bookmarked,
}: CardProps) => {

    let service = itemType === "service" ? item as ServiceItem : null;
    let bookmarkedItem = itemType === "service" ? service?.bookmarked : null;
    let reservation = itemType === "reservation" ? item as ReservationItem : null;
    let review = itemType === "review" ? item as RatingReviewItem : null;

    const ImageBanner = () => {
        // for reservation
        if (itemType === "reservation") {
            return (
                <div className="relative rounded-md overflow-hidden h-[138px] md:h-[173px] lg:h-[205px]">
                    {/* label */}
                    {reservation?.status === "confirmed" ?
                        <div className="absolute top-1 lg:top-2 left-1 flex items-center gap-x-2 bg-gray-200 text-black-100 py-0.5 px-1 lg:px-3 rounded-xl">
                            <Clock className='text-gray-400' />
                            <div className='p-medium-14 lg:p-medium-18'>{reservation?.date}</div>
                        </div> :
                        <div className="absolute top-1 lg:top-2 left-1 flex items-center gap-x-2 bg-gray-200 text-black-100 py-0.5 px-1 lg:px-3 rounded-xl">
                            <Clock className='text-gray-400' />
                            <div className='p-medium-14 lg:p-medium-18'>{reservation?.status}</div>
                        </div>
                    }
                    {/* bookmark */}
                    <BookmarkEmpty className="absolute top-1 right-0 text-primary-dark font-extrabold mr-1 w-5 h-5 lg:w-10 lg:h-10" />
                    <Image priority className="object-cover w-full h-full"
                        width={5000} height={5000}
                        src={reservation?.service.image ?? ''} alt={reservation?.service.title ?? ''}
                    />
                </div>
            )
        }
        // for service 
        else if (itemType === "service") {
            return (
                <div className="relative rounded-md overflow-hidden h-[110px] md:h-[145px] lg:h-[165px]">
                    {/* label */}
                    <div className="absolute top-1 lg:top-2 left-1 flex items-center gap-x-2 bg-gray-200 text-black-100 py-0.5 px-1 lg:px-3 rounded-xl">
                        <Clock className='text-gray-400' />
                        <div className='p-medium-14 lg:p-medium-18'>Avaliable Today</div>
                    </div>
                    {/* bookmark */}
                    {bookmarkedItem ?
                        <BookmarkFilled className="absolute top-1 right-0 text-primary-dark font-extrabold mr-1 w-5 h-5 lg:w-10 lg:h-10" /> 
                        :<BookmarkEmpty className="absolute top-1 right-0 text-primary-dark font-extrabold mr-1 w-5 h-5 lg:w-10 lg:h-10" />
                    }
                    {service &&  (
                        <Image priority className="object-cover w-full h-full"
                            width={5000} height={5000}
                            src={service?.imageUrl ?? ''} alt={service?.title}
                        />
                    )}
                </div>
            )
        }
    }

    const CardInfo = () => {
        // for reservation
        if (itemType === "reservation") {
            return (
                <div className=''>
                    {/* Titile */}
                    <div className='flex-between'>
                        <p className="p5-semibold">{reservation?.service?.title}</p>
                        <StarEmpty className='w-4 h-4' />
                    </div>
                    <div className='flex items-center justify-start gap-x-2'>
                        <LocationPin />
                        <p className="p7-medium text-gray-500">{reservation?.service.location}</p>
                    </div>
                </div>
            )
        }
        // for service 
        else if (itemType === "service") {
            return (
                <div className='flex flex-col gap-y-1 lg:gap-y-2'>
                    {/* Service Titile */}
                    <div className='flex justify-between'>
                        <div className="p5-semibold">{service?.title}</div>
                        <div className='flex flex-center text-xs text-gray-500 gap-x-1 mr-2'>
                            <p>(12)</p>
                            <p>3.2</p>
                            <StarEmpty className='w-3 h-3' />
                        </div>
                    </div>
                    {/* Provider */}
                    <div className="flex items-center gap-x-2 ml-1 ">
                        <div className='w-5 h-5 lg:w-7 lg:h-7 overflow-hidden'>
                            <Image priority className="w-full h-full rounded-full mr-2 object-cover"
                                src={service?.provider?.imageUrl ?? ''}
                                alt={service?.provider?.name ?? ''}
                                width={5000} height={5000}
                            />
                        </div>
                        <p className="p6-medium">
                            {service?.provider?.firstName ?? ''} {service?.provider?.lastName ?? ''}
                        </p>
                    </div>
                    {/* description */}
                    <p className="p7-regular line-clamp-1 text-primary-foreground pt-1 sm:pt-0">
                        {service?.description?.length ?? 0 > 45 ? service?.description?.slice(0, 45) + "..." : service?.description}
                    </p>
                </div>
            )
        }
        // for review
        else if (itemType === "review") {
            return (
                <div className='h-[185px] md:h-[225px] lg:h-[260px] p-2 '>
                    <div className='flex flex-col gap-y-2'>
                        {/* title */}
                        <p className="p5-semibold">{review?.service?.title ?? ""}</p>

                        <Separator />


                        {/* user */}
                        <div className='flex '>
                            <Image priority className="w-5 h-5 rounded-full mr-2"
                                src={review?.service?.imageUrl ?? ''}
                                alt={review?.service?.title ?? ''}
                                width={5000} height={5000}
                            />
                            <p className="p6-medium">{dummyUsers[0].firstName} {dummyUsers[0].lastName}  </p>
                        </div>
                        {/* rating */}
                        <div className='flex text-xs text-gray-500 gap-x-1 mr-2'>
                            {review?.rating && Array.from({ length: review?.rating }, (_, index) => (
                                <StarEmpty key={index} className='w-3 h-3' />
                            ))}
                        </div>
                        {/* description */}
                        <p className="p7-regular line-clamp-1 md:line-clamp-2">{review?.review}</p>

                        <Separator />


                        {/* Response */}
                        {review?.providerResponse &&
                            <div className='flex flex-col gap-y-2 p-2'>
                                <div className='flex '>
                                    <Image priority className="w-5 h-5 rounded-full mr-2"
                                        src={review?.service?.imageUrl ?? ''}
                                        alt={review?.service?.title ?? ''}
                                        width={5000} height={5000}
                                    />
                                    <p className="p6-regular">{review?.service?.provider} <span className='p7-light'>(provider)</span></p>
                                </div>
                                <p className="p7-regular line-clamp-1">{review?.providerResponse.response}</p>
                            </div>
                        }

                    </div>
                </div>
            )
        }
    }

    const ButtonOption = () => {
        // for reservation
        if (itemType === 'reservation') {
            return (
                <div className=''>
                    {reservation?.status === "pending" || reservation?.status === "confirmed" ?
                        <div className='flex flex-center border-t-[1.5px] border-grey-200 text-secondary-foreground'>
                            <button className="w-full text-xs md:text-s border-r-[1.5px] border-grey-200 py-2">Cancel</button>
                            <button className="w-full text-xs md:text-s py-2">Reshedule</button>
                        </div> :
                        <div className='flex flex-center'>
                            <button className="w-full text-xs md:text-s py-2 border-t-[1.5px] border-grey-200 text-secondary-foreground">
                                Review
                            </button>
                        </div>
                    }
                </div>
            )
        }

        // for service 
        else if (itemType === 'service') {
            return (
                <button className="text-xs md:text-s py-2 border-t-[1.5px] border-grey-200 text-secondary-foreground">Edit</button>
            )
        }

        // for review 
        else if (itemType === 'review') {
            return (
                <button className="text-xs md:text-s py-2 border-t-[1.5px] border-grey-200 text-secondary-foreground">Edit</button>
            )
        }
    }

    return (
        <div className={`hover-scale flex flex-col bg-primary rounded-md w-[280px] md:w-[350px] lg:w-[400px]
            ${!hasButton ? "h-[200px] md:h-[250px] lg:h-[285px] " : "h-[235px] md:h-[280px] lg:h-[315px]"}`}>

            {/* Card content */}
            <Link href={`/${itemType + "s"}/${item?._id.toString()}`}
                className={`flex flex-col mx-3 my-2 lg:m-2 gap-y-1 ${itemType === "review" ? "h-auto" : ""}`}>
                <ImageBanner />
                <div className='mx-2'>
                    <CardInfo />
                </div>
            </Link>

            {/* optional button */}
            {hasButton && <ButtonOption />}
        </div>
    )
}

export default Card