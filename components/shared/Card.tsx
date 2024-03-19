import React from 'react'
import Image from 'next/image'
import { Skeleton } from "@/components/ui/skeleton"
import { BookmarkEmpty } from '@/public/assets/icons/BookmarkEmpty';
import { Clock } from '@/public/assets/icons/Clock';
import { StarEmpty } from '@/public/assets/icons/StarEmpty';
import { ServiceItem } from '@/lib/database/models/service.model';
import Link from 'next/link';
import { RatingReviewItem } from '@/lib/database/models/ratingReview.model';
import { ReservationItem } from '@/lib/database/models/reservation.model';
import dummyUsers from '@/constants/dummyUsers';
import { LocationPin } from '@/public/assets/icons/LocationPin';

type CardProps = {
    direction?: 'horizontal' | 'vertical'
    itemType?: 'service' | 'reservation' | 'review'
    item?: ServiceItem | RatingReviewItem | ReservationItem
    hasButton?: boolean
};

const Card = ({ 
    direction, 
    itemType, 
    item,
    hasButton,
}: CardProps) => {

    let service = itemType === "service" ? item as ServiceItem : null;
    let reservation = itemType === "reservation" ? item as ReservationItem : null;
    let review = itemType === "review" ? item as RatingReviewItem : null;

    const ImageBanner = () => {
        // for reservation
        if (itemType === "reservation") {
            return (
                <div className="border border-gray-200 rounded-lg overflow-hidden h-[120px] relative">
                    { reservation?.status === "confirmed" ?
                        <div className="absolute top-1 left-1 flex items-center gap-x-2 bg-gray-200 text-black-100 py-0.5 px-1 text-sm rounded-xl">
                            <Clock className='text-gray-400' />
                            <div className='text-xs'>{reservation?.date}</div>
                        </div>:
                        <div className="absolute top-1 left-1 flex items-center gap-x-2 bg-gray-200 text-black-100 py-0.5 px-1 text-sm rounded-xl">
                            <Clock className='text-gray-400' />
                            <div className='text-xs'>{reservation?.status}</div>
                        </div>
                    }   
                    <BookmarkEmpty className="absolute top-1 right-0 text-gray-400 mr-1 w-5 h-5" />
                    <Image priority className="w-full h-full object-cover"
                        width={5000} height={5000}
                        src={reservation?.service.image ?? ''} alt={reservation?.service.title ?? ''}
                    />
                </div>
            )
        }
        // for service 
        else if (itemType === "service") {
            return (
                <div className="border border-gray-200 rounded-lg overflow-hidden h-[120px] relative">
                    <div className="absolute top-1 left-1 flex items-center gap-x-2 bg-gray-200 text-black-100 py-0.5 px-1 text-sm rounded-xl">
                        <Clock className='text-gray-400' />
                        <div className='text-xs'>Avaliable Today</div>
                    </div>
                    <BookmarkEmpty className="absolute top-1 right-0 text-gray-400 mr-1 w-5 h-5" />
                    {service && 'image' in service && (
                        <Image priority className="w-full h-full object-cover"
                            width={5000} height={5000}
                            src={service?.image[0] ?? ''} alt={service?.title}
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
                <div>
                    <div className='flex justify-between'>
                        {/* Titile */}
                        <p className="text-m font-semibold">{reservation?.service?.title}</p>
                        <StarEmpty className='w-3 h-3' />
                    </div>
                    <div className='flex justify-start gap-x-1'>
                        <LocationPin />
                        <p className="text-xs text-gray-500">{reservation?.service.location}</p>
                    </div>
                </div>
            )
        }
        // for service 
        else if (itemType === "service") {
            return (
                <div>
                    <div className='flex justify-between'>
                        {/* Titile */}
                        <p className="text-m font-semibold">{service?.title}</p>
                        <div className='flex flex-center text-xs text-gray-500 gap-x-1 mr-2'>
                            <p>(12)</p>
                            <p>3.2</p>
                            <StarEmpty className='w-3 h-3' />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Image priority className="w-5 h-5 rounded-full mr-2" 
                            src={service?.serviceProvider[0]?.imageURL ?? ''} 
                            alt={service?.serviceProvider[0]?.name ?? ''} 
                            width={5000} height={5000}
                        />
                        <p className="text-xs text-gray-500">{service?.serviceProvider[0]?.name ?? ''}</p>
                    </div>
                    <p className="text-[10px] text-gray-500">{service?.description?.length ?? 0 > 45 ? service?.description?.slice(0, 45) + "..." : service?.description}</p>
                </div>
            )
        } 
        // for review
        else if (itemType === "review") {
            return (
                <div>
                    <div className='flex flex-col gap-y-2'>
                        {/* title */}
                        <p className="text-m font-semibold">{review?.service.title}</p>
                        {/* User */}
                        <div className='flex '>
                            <Image priority className="w-5 h-5 rounded-full mr-2" 
                                src={review?.service.imageURL ?? ''} 
                                alt={review?.service.title ?? ''} 
                                width={5000} height={5000} 
                            />
                            <p className="text-m font-semibold">{dummyUsers[0].firstName} {dummyUsers[0].lastName}  </p>
                        </div>            
                        {/* rating */}
                        <div className='flex text-xs text-gray-500 gap-x-1 mr-2'>
                            { review?.rating && Array.from({length: review?.rating}, (_, index) => (
                                <StarEmpty key={index} className='w-3 h-3' />
                            ))}                   
                        </div>
                        {/* description */}
                        <p className="text-[10px] text-gray-500">{review?.review}</p>
                        {/* Response */}
                        { review?.providerResponse && 
                            <div className='flex flex-col gap-y-2'>
                                <p className="text-s font-semibold">Provider's response</p>
                                <div className='flex '>
                                    <Image priority className="w-5 h-5 rounded-full mr-2" 
                                        src={review?.service.imageURL ?? ''} 
                                        alt={review?.service.title ?? ''} 
                                        width={5000} height={5000} 
                                    />
                                    <p className="text-m font-semibold">{review?.service.provider}</p>
                                </div>
                                <p className="text-[10px] text-gray-500">{review?.providerResponse.response}</p>
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
                <div className='h-[30px]'>
                    { reservation?.status === "pending" || reservation?.status === "confirmed" ?
                    <div className='flex flex-center'>
                        <button className="w-full text-2xs py-2 border-r-[1.5px] border-t-[1.5px] border-primary-dark text-primary-foreground">Cancel</button> 
                        <button className="w-full text-2xs py-2 border-t-[1.5px] border-primary-dark text-primary-foreground">Reshedule</button> 
                    </div>:
                    <div className='flex flex-center'>
                        <button className="w-full text-2xs py-2 border-t-[1.5px] border-primary-dark text-primary-foreground">Rate & Review</button>
                    </div>
                    }
                </div>
            )
        }

        // for service 
        else if (itemType === 'service') {
            return ( 
                <button className="text-2xs py-2 border-t-[1.5px] border-primary-dark text-primary-foreground">Edit Service</button>
            )
        }

        // for review 
        else if (itemType === 'review') {
            return (
                <button className="text-2xs py-2 border-t-[1.5px] border-primary-dark text-primary-foreground">Edit Review</button>
            )
        }
    }

    return (
        <div className='flex flex-col'>
            {/* Card Outer Box */}
            <div className={`flex flex-col bg-primary rounded-sm  
                                ${direction === "vertical" ? "w-[300px]" : 
                                                "w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] "}`}> {/* horizontal */}
                {/* Card content */}
                <Link href={`/${itemType + "s"}/${item?._id.toString()}`} 
                    className={`h-[170px] flex flex-col mx-3 my-2 gap-y-1 
                                ${itemType === "review" ? "h-auto" : ""}`}>
                    <ImageBanner/>
                    <CardInfo/>
                </Link>

                {/* optional button */}
                { hasButton && <ButtonOption/>}
            </div>
            {/* } */}
        </div>
    )
}

export default Card