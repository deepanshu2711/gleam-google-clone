"use client"
import Link from "next/link";
import {AiOutlineSearch} from "react-icons/ai"
import { CiImageOn } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";


const SearchHeaderOptions = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searthTerm = searchParams.get("searchTerm");
    

    return ( 
        <div className="flex gap-10 items-center w-screen justify-center mb-2">
            <Link href={`/search/web?searchTerm=${searthTerm}`} className={` flex gap-2 items-center ${pathname ==="/search/web" ? "text-blue-600 font-medium " :"text-gray-500"}`}>
                <AiOutlineSearch />
                <p className=" hover:underline text-sm ">All</p>
            </Link>
            <Link href={`/search/image?searchTerm=${searthTerm}`} className={`flex gap-2 items-center ${pathname ==="/search/image" ? "text-blue-600 font-medium " :"text-gray-500"} `}>
                <CiImageOn />
                <p className=" text-sm hover:underline">Images</p>
            </Link>
        </div>
     );
}
 
export default SearchHeaderOptions;