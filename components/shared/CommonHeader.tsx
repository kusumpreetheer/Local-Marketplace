"use client"

import { ArrowLeft } from "@/public/assets/icons/ArrowLeft";
import { BookmarkEmpty } from "@/public/assets/icons/BookmarkEmpty";

const CommonHeader = ({ title, savedButton }: { title: string, savedButton?: boolean }) => {
    const goBack = () => {
        if (typeof window !== 'undefined') {
            window.history.back();
        }
    };

    return (
        <section className='top-0 z-50'>
            <div className='flex justify-between items-center px-3 py-4'>
                {/* Back Button */}
                <button onClick={goBack} className='text-black text-lg font-semibold'>
                    <ArrowLeft className='text-[30px]' />
                </button>
                {/* Title */}
                <div className="flex-grow flex justify-center">
                    <h2 className='text-primary-foreground text-xl font-semibold'>{title}</h2> {/* Removed absolute positioning */}
                </div>
                {/* Bookmark */}
                {savedButton ?
                    <button className='text-primary-foreground text-lg font-semibold'>
                        <BookmarkEmpty className='w-8 h-8' />
                    </button>
                    : <div className="w-8"></div> /* This is a temporary fix for the sticky header */
                }
            </div>
        </section>

    );
};

export default CommonHeader;
