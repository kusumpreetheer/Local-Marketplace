import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'
import dummyServices from '@/constants/dummyServices'

const services = () => {
  return (
    <div>
        <CommonHeader title='My Services'/>
        <Collection 
          direction="vertical"
          itemType='service'
          items={dummyServices}
          hasButton={true}
        />
    </div>
  )
}

export default services
