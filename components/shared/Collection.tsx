"use client"

import React, { useState, useRef, useEffect } from 'react';
import Card from './Card';
import { IService } from '@/lib/database/models/service.model';
import { ReviewItem } from '@/lib/database/models/review.model';
import { ReservationItem } from '@/lib/database/models/reservation.model';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import { ArrowLeft } from '@/public/assets/icons/ArrowLeft';
import { ArrowRight } from '@/public/assets/icons/ArrowRight';

type CollectionProps = {
    title?: { _id: string, name: string };
    direction?: 'horizontal' | 'vertical';
    itemType?: 'service' | 'reservation' | 'review';
    items?: IService[] | ReviewItem[] | ReservationItem[];
    hasButton?: boolean;
    limit?: number;
    hasViewMore?: boolean;
    link?: Url;
    itemsPerPage?: number;
    nextPrevButton?: boolean;
    selectedCategory?: string;
};

const Collection = ({ title, direction, itemType, items, hasButton, hasViewMore, link, nextPrevButton, selectedCategory
}: CollectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollBy = (offset: number) => {
        if (containerRef.current) { containerRef.current.scrollLeft += offset; }
    };

    /*************************************************************************************
     * Layout Components
     *************************************************************************************/
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
                    onClick={() => scrollBy(-800)}
                    className="left-0 hidden md:block"
                >
                    <ArrowLeft className='text-[22px]' />
                </button>}
                {nextPrevButton && <button
                    id="card-prev-next-button"
                    onClick={() => scrollBy(800)}
                    className="right-0 hidden md:block"
                >
                    <ArrowRight className='text-[22px]' />
                </button>}
            </div>
        )
    }

    /*************************************************************************************
     * Render
     *************************************************************************************/
    return (
        <>
            <div className='flex justify-start items-center gap-x-2 cursor-pointer [&_*]:hover:opacity-100 '>
                <h2 className={`pl-5 md:pl-4 lg:pl-10 h4-bold text-primary-foreground ${selectedCategory === title?._id ? ' highlight-text' : ""}`}>
                    {title?.name}
                </h2>

                {/* View more */}
                {hasViewMore && link &&
                    <Link href={link} className='transition-all duration-300 ease-in-out opacity-0'>                       
                        <ArrowRight className='text-[24px] font-bold text-primary-foreground' />
                    </Link>
                }
            </div>

            <CardCollection />
        </>
    );
};

export default Collection;
