import React, { useEffect, useState } from 'react'
import Collection from '@/components/shared/Collection'
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

  /****************************************************************************************************************************
   * Fetch services from the database, using the search parameters
   ****************************************************************************************************************************/
  const services = await getAllServices({
    query: searchText,
    category,
    page,
    limit: 100,
  });

  /****************************************************************************************************************************
   * Render
   ****************************************************************************************************************************/
  return (
    <>
      {/* Search & Filter */}
      <div className="flex w-full p-2 py-4 md:p-4">
        <div className="big-wrapper flex items-center w-full gap-x-2">
          <BackButton destination='/' />
          <Search />
          <Filter />
        </div>
      </div>

      {/* Result collection */}
      <div className='flex-center'>
        <Collection
          direction="vertical"
          itemType='service'
          items={services?.data}
          hasViewMore={true}
        />
      </div>
    </>
  )
}