// vendors
import React from 'react'
import Image from "next/image";
// components
import { 
  HomeHeader,
  HomeSearch 
} from '@/components'

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          alt='Google Logo'
          width="300"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
        />
        <HomeSearch />
      </div>
    </>
  )
}
