"use client"

import { useEffect } from "react";

const Error = ({error,reset}) => {

    useEffect(()=>{
        console.log({"Error" : error})
    },[error])

    return ( 
        <div className="flex flex-col items-center justify-center pt-10">
            <h1 className="text-3xl mb-4">Something went Wrong</h1>
            <button className="bg-[#392467] p-2 text-white rounded-lg font-medium hover:brightness-105 hover:shadow-md transition-shadow" onClick={()=>reset()}>Try Again</button>
        </div>
     );
}
 
export default Error;