"use client"

// vendors
import {
  usePathname,
  useRouter,
  useSearchParams
} from "next/navigation";
// icons
import {
  AiOutlineCamera,
  AiOutlineSearch
} from "react-icons/ai";

export const SearchHeaderOptions = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  const selectTab = (tab: string) => {
    router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`);
  }

  return (
    <div className="flex space-x-2 select-none border-b border-midground-color w-full justify-center lg:justify-start lg:pl-52 text-gray-400 text-sm">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/web" && "!text-blue-600 !border-blue-600"}`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div 
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/image" && "!text-blue-600 !border-blue-600"}`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  )
}