import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
import DummyUsers from '@/constants/dummyUsers'
import {dummmyRatingReviews} from '@/constants/dummyReviews'
import Link from 'next/link'

const ProfileReviews = () => {

  const user = DummyUsers[0];
  const reviews = dummmyRatingReviews.filter(review => review.clientID === user._id);

  return (
    <div>
        <CommonHeader title='My Reviews'/>
        <Link href="/profile/reviews/edit">
          <Collection 
            direction="vertical"
            itemType='review'
            items={reviews}
            hasButton={true} 
          />
        </Link>
    </div>
  )
}

export default ProfileReviews
