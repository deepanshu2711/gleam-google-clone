"use client"


import { useRouter } from "next/navigation";
import { useState } from "react";
import {AiOutlineSearch} from "react-icons/ai"
import {BsFillMicFill} from "react-icons/bs"


const HomeSearch = () => {
    const [input , setInput] = useState("");
    const router = useRouter();
    const[randomSearchloading,setrandomSearchloading] = useState(false);


    function handleSubmit (e) {
        e.preventDefault();
        if(!input.trim()) return;
        router.push(`/search?searchTerm=${input}`);
    }

    async function randomSearch (e) {
        e.preventDefault();
        
        try {
            setrandomSearchloading(true);
            const res = await fetch("https://random-word-api.herokuapp.com/word");
            if(!res) return;
            const RandomWord = await res.json();
            setrandomSearchloading(false);
            router.push(`/search?searchTerm=${RandomWord}`);
        } catch (error) {
            console.log(error)
            setrandomSearchloading(false);
        }
        
    }

    return ( 
        <>
            <form onSubmit={handleSubmit} className="flex w-full mx-auto max-w-[90%] border justify-center
               border-gray-200 rounded-lg px-5 py-3 hover:shadow-md transition-shadow
               focus-within:shadow-md sm:max-w-xl lg:max-w-2xl
               ">
                <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
                <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search Google or type a URL" className="flex-grow focus:outline-none" />
                <BsFillMicFill className="text-xl text-gray-500 ml-3" />
                
            </form>
            <div className="flex flex-col md:flex-row lg:flex-row gap-6 mt-10 ">
                <button onClick={handleSubmit} className="bg-[#A367B1] min-w-36  p-3 rounded-lg text-white font-medium hover:brightness-105 hover:ring-1
                 hover:ring-gray-200 active:ring-gray-300 transition-shadow">Google Search</button>
                <button onClick={randomSearch} disabled={randomSearchloading} className=" disabled:opacity-80 bg-[#FFD1E3] min-w-36 p-3 rounded-lg text-[#392467] font-medium hover:brightness-105 hover:ring-1
                 hover:ring-gray-200 active:ring-gray-300 transition-shadow ">{randomSearchloading ? "Searching..." : "Random Search"}</button>
            </div>
        </>
     );
}
 
export default HomeSearch;