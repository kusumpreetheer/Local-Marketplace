"use client"

import React from 'react'
import { ArrowLeft } from '@/public/assets/icons/ArrowLeft'
import { useRouter } from 'next/navigation'

const BackButton = ({ destination }: { destination?: string }) => {
    const router = useRouter();

    const goBack = () => {
        if (typeof window !== 'undefined') {
            // go to destination if provided
            if (destination) {
                router.push(destination);
                return; 
            }
            window.history.back();
        }
    };

    return (
        <button onClick={goBack} className='hover:bg-accent-light/50 hover-scale p-2 rounded-full text-lg font-semibold items-center ml-2 md:ml-4'>
            <ArrowLeft className='text-[30px]' />
        </button>
    )
}

export default BackButton