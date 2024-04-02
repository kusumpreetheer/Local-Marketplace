import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
import DummyUsers from '@/constants/dummyUsers'
import { dummmyRatingReviews } from '@/constants/dummyReviews'
import Link from 'next/link'

const ProfileReviews = () => {

  const user = DummyUsers[0];
  const reviews = dummmyRatingReviews.filter(review => review._id === user._id);

  return (
    <div >
      <CommonHeader title='My Reviews'/>
      <div className='flex justify-center items-center pt-10 '>
        <Collection
          direction="vertical"
          itemType='review'
          items={reviews}
          hasButton={true}
        />
      </div>
    </div>
  )
}

export default ProfileReviews
