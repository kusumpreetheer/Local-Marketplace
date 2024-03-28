"use client"

import { BookmarkEmpty } from "@/public/assets/icons/BookmarkEmpty";
import { BookmarkFilled } from '@/public/assets/icons/BookmarkFilled';
import { useState } from "react";
import BackButton from "./BackButton";
import { UserButton } from '@clerk/nextjs'

const CommonHeader = ({ title, savedButton, signOutButton }:
    { title: string, savedButton?: boolean, signOutButton?: boolean }) => {



    const [isBookmarked, setIsBookmarked] = useState(false);

    return (
        <section className='border-b border-gray-300'>
            <div className='big-wrapper flex-between py-4'>
                {/* Back Button */}
                <BackButton />

                {/* Title */}
                <div className="flex-grow flex-center mx-2">
                    <h2 className='h4-semibold'>{title}</h2> {/* Removed absolute positioning */}
                </div>
                {/* Bookmark */}
                <div>
                    {savedButton ?
                        <button onClick={() => setIsBookmarked(!isBookmarked)} className='text-primary-foreground text-lg p-4 font-semibold'>
                            {isBookmarked ?
                                <BookmarkFilled className="text-primary-dark font-extrabold w-7 h-7 lg:w-10 lg:h-10" />
                                : <BookmarkEmpty className="text-primary-dark font-extrabold w-7 h-7 lg:w-10 lg:h-10" />
                            }
                        </button>
                        : <div className="w-8"></div> /* This is a temporary fix for the sticky header */
                    }

                </div>

                {/* Sign Out */}
                {signOutButton &&
                    <div className="hover-scale flex-between w-7 h-7 lg:w-10 lg:h-10 mx-8">
                        <UserButton afterSignOutUrl="/" />
                    </div>
                }
            </div>
        </section>

    );
};

export default CommonHeader;
