"use client"

import React, { useState, useRef, useEffect } from 'react';
import Card from './Card';
import { ServiceItem } from '@/lib/database/models/service.model';
import { RatingReviewItem } from '@/lib/database/models/ratingReview.model';
import { ReservationItem } from '@/lib/database/models/reservation.model';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import { ArrowLeft } from '@/public/assets/icons/ArrowLeft';
import { ArrowRight } from '@/public/assets/icons/ArrowRight';

type CollectionProps = {
    title?: string;
    selectedCategory?: string;
    direction?: 'horizontal' | 'vertical';
    itemType?: 'service' | 'reservation' | 'review';
    items?: ServiceItem[] | RatingReviewItem[] | ReservationItem[];
    hasButton?: boolean;
    limit?: number;
    hasViewMore?: boolean;
    link?: Url;
    itemsPerPage?: number;
    nextPrevButton?: boolean;
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
    itemsPerPage,
    nextPrevButton,
}: CollectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollBy = (offset: number) => {
        console.log(containerRef.current?.scrollLeft, offset);

        if (containerRef.current) { containerRef.current.scrollLeft += offset; }
    };

    // Card collection
    const CardCollection = () => {
        return (
            <div className="relative [&_#card-prev-next-button]:hover:opacity-50">
                {/* Cards */}
                <div
                    ref={containerRef}
                    className={`${direction === "vertical" ?"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto"
                        : "flex pr-2 md:pr-10 overflow-x-auto scrollbar-hide"}`}
                >
                    {items?.map((item, index) => (
                        <div key={index} className={`${direction === "vertical" ? "" : "py-2 md:py-6 pl-2"} 
                        ${(index === 0 && direction !== "vertical") ? 'md:pl-6' : ''}`}>
                            <Card
                                key={item._id}
                                itemType={itemType as 'service' | 'reservation' | 'review' | undefined}
                                item={item}
                                direction={direction}
                                hasButton={hasButton}
                            />
                        </div>
                    ))}
                </div>

                {/* Next Prev button */}
                {nextPrevButton && <button
                    id="card-prev-next-button"
                    onClick={() => scrollBy(-400)} // Adjust scroll amount as per your design
                    className="hidden md:block left-0"
                >
                    <ArrowLeft className='text-[22px]' />
                </button>}
                {nextPrevButton && <button
                    id="card-prev-next-button"
                    onClick={() => scrollBy(400)} // Adjust scroll amount as per your design
                    className="hidden md:block right-0"
                >
                    <ArrowRight className='text-[22px]' />
                </button>}
            </div>
        )
    }

    return (
        <>
            <div className='flex justify-start items-center gap-x-2 cursor-pointer [&_*]:hover:opacity-100'>
                <h2 className='pl-5 md:pl-4 lg:pl-10 h4-bold text-primary-foreground'>
                    {title}
                </h2>
                {/* View more */}
                {hasViewMore && link &&
                    <Link href={link} className='opacity-0 transition-all duration-300 ease-in-out'>   
                        <ArrowRight className='text-[24px] font-bold text-primary-foreground' />
                    </Link>
                }
            </div>

            <CardCollection />
        </>
    );
};

export default Collection;
