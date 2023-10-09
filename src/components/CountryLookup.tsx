'use client'

// vendors
import React, { useEffect, useState } from 'react'

export const CountryLookup = () => {
  const [country, setCountry] = useState("United States");
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_LOOKUP_KEY)
    fetch(
      `http://ip-api.com/json`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);
  return <div>{country}</div>;
}