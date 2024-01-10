"use client"

import { useEffect, useState } from "react";


const CountryLookup = () => {
    const[country,setcountry] = useState("United States");

    useEffect(()=>{
        const getCounrty =async() =>{
            const res = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`);
            const data = await res.json();
            setcountry(data.country);
        }
        getCounrty();
    },[]);

    return ( 
        
        <div>
            {country}
        </div>

        );
}
 
export default CountryLookup;