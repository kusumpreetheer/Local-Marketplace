import React from 'react'
import CommonHeader from '@/components/shared/CommonHeader'
import Collection from '@/components/shared/Collection'

const saved = () => {
  return (
    <div>
        <CommonHeader title='Saved Services'/>
        <Collection direction="vertical"/>
    </div>
  )
}

export default saved
