import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
import { dummyReservations } from '@/constants/dummyReservations'
const reservations = () => {

  return (
    <div className='wrapper'>
        <CommonHeader title='My Reservations'/>
        <Collection 
            direction='vertical' 
            itemType='reservation' 
            items={dummyReservations} 
            hasButton={true}
        />
    </div>
  )
}

export default reservations
