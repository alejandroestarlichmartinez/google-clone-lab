'use client'

// vendors
import React, { useEffect, useState } from 'react'

export const CountryLookup = () => {
  const [country, setCountry] = useState("United States");
  const [city, setCity] = useState("New York");
  useEffect(() => {
    fetch(
      `http://ip-api.com/json`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountry(data.country);
        setCity(`${data.city}, ${data.zip}`);
      });
  }, []);
  return (
    <div>
      <span>{ country }</span>
      <span className="ml-5 font-bold	">
        { city }
      </span>
    </div>
  )
}