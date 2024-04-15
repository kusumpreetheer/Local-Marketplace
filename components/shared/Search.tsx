"use client"

import { useEffect, useRef, useState } from 'react'
import { Input } from '../ui/input';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchIcon } from '@/public/assets/icons/SearchIcon'

const Search = ({ placeholder = 'Search services...'}: { placeholder?: string }) => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  /****************************************************************************************************************************
   * Update the query in the URL when the query changes
   ****************************************************************************************************************************/
  useEffect(() => {
    // Debounce the query change, so that the URL is updated only after the user stops typing
    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';

      // Update the query in the URL using the searchParams
      if (query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: query
        })
      // If the query is empty, remove the query key from the URL
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['query']
        })
      }
      // Update the URL
      router.push(newUrl, { scroll: false });
    }, 300)
    return () => clearTimeout(delayDebounceFn); // Clear the timeout on unmount
  }, [query, searchParams, router])

  /****************************************************************************************************************************
   * Render
   ****************************************************************************************************************************/
  return (
    <div className="rounded-lg flex-center min-h-[54px] w-full overflow-hidden bg-primary px-4 py-2">
      <SearchIcon className="w-5 h-5 text-grey-500" />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="p6-regular border-0 bg-primary outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  )
}

export default Search