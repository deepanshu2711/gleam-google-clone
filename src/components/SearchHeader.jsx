import Image from "next/image";
import {RiSettings3Line} from "react-icons/ri"
import {TbGridDots} from "react-icons/tb"
import Link from "next/link";
import SearchBox from "./SearchBox";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
    return ( 
        <header className="border-b-2">
            <div className="sticky flex w-full p-4 items-center justify-between ">
                <Link href={"/"}>
                    <Image src={"/GLEAM_LOGO.png"}
                    width={200}
                    height={200}
                    alt="logo"
                    
                    />     
                </Link>
                <div>
                    <SearchBox />
                </div>
                <div className="flex gap-4 items-center">
                    <div className="hidden md:inline-flex gap-4">
                    <RiSettings3Line className="text-3xl cursor-pointer hover:bg-gray-200 rounded-full" />
                    <TbGridDots className=" text-3xl cursor-pointer hover:bg-gray-200 rounded-full" />
                    </div>
                    <button className="bg-[#392467] p-2 text-white rounded-lg font-medium hover:brightness-105 hover:shadow-md transition-shadow hidden sm:inline-flex">Sign in</button>

                </div>
            
            </div>

            <div>
                <SearchHeaderOptions />
            </div>

            

            
        </header>
     );
}
 
export default SearchHeader;