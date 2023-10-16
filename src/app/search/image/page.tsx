
// exports
export const dynamic = "force-dynamic";
// components
import {
  ImageSearchResults,
  NotFound
} from "@/components";
// helpers
import { searchEngine } from "@/helper/search";

type Props = {
  searchParams: {
    searchTerm: string;
    start: string;
  }
}

export default async function ImageSearchPage({ searchParams }: Props) {
  const startIndex = searchParams.start;
  const data = await searchEngine({
    searchTerm: searchParams.searchTerm,
    startIndex,
    isImage: true
  });

  const results = data?.items;

  !results && <NotFound />; 
  return <>{results && <ImageSearchResults results={data} />}</>;
}