// vendors
import React from 'react'
import Link from 'next/link';
// components
import { NotFound, WebSearchRestult } from '@/components';
// utils
import { searchEngine } from '@/helper/search';

type Props = {
  searchParams: {
    searchTerm: string;
    start: string;
  }
}

export default async function WebSearchPage({searchParams}: Props) {
  const startIndex = searchParams.start;
  const data = await searchEngine({
    searchTerm: searchParams.searchTerm,
    startIndex
  });

  const results = data?.items;

  !results && <NotFound />; 
  return <>{results && <WebSearchRestult results={data} />}</>;
}
