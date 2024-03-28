import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
import { dummyReservations } from '@/constants/dummyReservations'
const reservations = () => {

  return (
    <div className=''>
        <CommonHeader title='My Reservations'/>
        <div className='flex-center pt-6'>
          <Collection 
              direction='vertical' 
              itemType='reservation' 
              items={dummyReservations} 
              hasButton={true}
          />
        </div>
    </div>
  )
}

export default reservations
