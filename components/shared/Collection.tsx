import React from 'react'
import Card from './Card'
import { ServiceItem } from '@/lib/database/models/service.model';
import { RatingReviewItem } from '@/lib/database/models/ratingReview.model';
import { ReservationItem } from '@/lib/database/models/reservation.model';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

type CollectionProps = {
    title?: string,
    selectedCategory?: string, 
    direction?: 'horizontal' | 'vertical',
    itemType?: 'service' | 'reservation' | 'review',
    items?: ServiceItem[] | RatingReviewItem[] | ReservationItem[],
    hasButton?: boolean,
    limit?: number,
    hasViewMore?: boolean,
    link?: Url
};

const Collection = ({
    title,
    selectedCategory,
    direction,
    itemType,
    items,
    hasButton,
    limit,
    hasViewMore,
    link,
}: CollectionProps) => {
  
    // API call to specific get data for this category

    // store the items in a list and map through them

    return (
        <div className='flex flex-col gap-y-1 '>
            {/* Title */}
            <div className='flex items-end justify-start gap-x-2 '>
                <h2 className={`font-semibold tracking-normal transition-all duration-300 
                    ${selectedCategory === title ? "text-4xl text-accent-dark" : " text-3xl"}`}>
                    {title}
                </h2>
                {/* view more */}
                {hasViewMore && link &&
                    <Link href={link}><h3>View More </h3></Link>
                }
            </div>

            {/* Cards */}
            <div className={`${direction === "vertical" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto"  /* vertical */
                : "flex gap-x-5 pr-10 overflow-x-auto scrollbar-hide"}`}> {/* horizontal */}

                {items?.map((item) => (
                    <Card
                        key={item._id}
                        itemType={itemType as 'service' | 'reservation' | 'review' | undefined}
                        item={item}
                        direction={direction}
                        hasButton={hasButton}
                    />
                ))}
            </div>
        </div>
    )
}

export default Collection