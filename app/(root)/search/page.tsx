import React from 'react'
import Collection from '@/components/shared/Collection'
import { dummyServices } from '@/constants/dummyServices'
import Search from '@/components/shared/Search'
import Filter from '@/components/shared/Filter'
import { getAllServices } from '@/lib/actions/service.actions';
import { SearchParamProps } from '@/types';
import BackButton from '@/components/shared/BackButton'

export default async function SearchPage({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';
  const rating = Number(searchParams?.rating) || 0;
  const distance = Number(searchParams?.distance) || 0;
  
  // const services = await getAllServices({
  //   query: searchText,
  //   category,
  //   rating, 
  //   distance,
  //   page,
  //   limit: 12
  // })

  return (
    <>
      {/* Search & Filter */}
      <div className="flex w-full p-2 py-4 md:p-4">
        <div className="big-wrapper flex items-center w-full gap-x-2">
          <BackButton destination='/'/>
          <Search/>
          <Filter/>
        </div>
      </div>

      {/* Result collection */}
      <div className='flex-center'>
        <Collection
          direction="vertical"
          itemType='service'
          items={dummyServices}
          hasViewMore={true}
        />
      </div>
    </>
  )
}