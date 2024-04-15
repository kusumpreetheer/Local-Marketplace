
import React from 'react'
import Collection from '@/components/shared/Collection'
import CommonHeader from '@/components/shared/CommonHeader'
import { StarFilled } from '@/public/assets/icons/StarFilled'
import Image from 'next/image';
import dummmyReviews from '@/constants/dummyReviews';

const Reviews = () => {

    const reviews = dummmyReviews;

    return (
        <section>
            <CommonHeader title='Reviews' />
            <div className='flex justify-center items-center pt-10 '>
                <Collection
                    direction="vertical"
                    itemType='review'
                    items={reviews}
                    hasButton={true}
                />
            </div>
        </section>
    )
}

export default Reviews
