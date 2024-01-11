"use client"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import {AiOutlineSearch} from "react-icons/ai"
import { RxCross2 } from "react-icons/rx";
import {BsFillMicFill} from "react-icons/bs"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const SearchBox = () => {
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");
    const pathname = usePathname();
    const router = useRouter();
    const[value,setValue] = useState(searchTerm || "");
    
    

    


    function handleSubmit(e) {
        e.preventDefault();
        if(!value.trim()) return;
        if(pathname == "/search/web"){
            router.push(`/search/web?searchTerm=${value}`);
        }else if(pathname == "/search/image") {
            router.push(`/search/image?searchTerm=${value}`);
        }

        


    }

    return ( 
        <div className="flex  justify-between px-6 py-2 lg:w-screen  items-center border border-gray-200 rounded-full focus-within:shadow-md hover:shadow-md max-w-3xl mx-auto">
            <form className="flex flex-grow items-center" onSubmit={handleSubmit}>
                <input defaultValue={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Search here" className="p-1 focus:outline-none w-full"/>
                <RxCross2 className="mr-3 text-lg cursor-pointer hover:transition-transform hover:scale-125" onClick={() => setValue("")}  />
                
            </form>
            <div className="flex items-center text-xl gap-3 border-l">
                <BsFillMicFill className="cursor-pointer" />
                <AiOutlineSearch className="cursor-pointer hover:transition-transform hover:scale-125" onClick={handleSubmit}/>
            </div>
        </div>
     );
}
 
export default SearchBox;