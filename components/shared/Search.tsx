"use client"

import { useEffect, useState } from 'react'
import { Input } from '../ui/input';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { SearchIcon } from '@/public/assets/icons/SearchIcon'

const Search = ({ placeholder = 'Search services...', disabled }: { placeholder?: string, disabled?: boolean }) => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Debounce the query change
    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';

      if (query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: query
        })
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['query']
        })
      }
      router.push(newUrl, { scroll: false });
    }, 300)
    return () => clearTimeout(delayDebounceFn);
  }, [query, searchParams, router])

  return (
    <div className="rounded-lg flex-center min-h-[54px] w-full overflow-hidden bg-primary px-4 py-2">
      <SearchIcon className="w-5 h-5 text-grey-500" />
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className={`p6-regular border-0 bg-primary outline-offset-0 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0
        ${disabled ? 'cursor-pointer' : 'cursor-text'}`}
      />
    </div>
  )
}

export default Search