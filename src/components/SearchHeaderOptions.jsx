import Link from "next/link";
import {AiOutlineSearch} from "react-icons/ai"
import { CiImageOn } from "react-icons/ci";

const SearchHeaderOptions = () => {
    return ( 
        <div className="flex gap-10 items-center w-screen justify-center">
            <Link href={"/"} className=" flex gap-2 items-center">
                <AiOutlineSearch />
                <p className="text-gray-500 hover:underline text-sm ">All</p>
            </Link>
            <Link href={"/"} className="flex gap-2 items-center ">
                <CiImageOn />
                <p className="text-gray-500 text-sm hover:underline">Images</p>
            </Link>
        </div>
     );
}
 
export default SearchHeaderOptions;