import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
import { dummyServices } from '@/constants/dummyServices'

const services = () => {
  return (
    <div className=''>
        <CommonHeader title='My Services'/>
        <div className='flex-center pt-6'>
          <Collection 
            direction="vertical"
            itemType='service'
            items={dummyServices}
            hasButton={true}
            hasViewMore={true}
          />
        </div>
    </div>
  )
}

export default services
