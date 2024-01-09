import Link from "next/link";
import {TbGridDots} from "react-icons/tb"

const HomeHeader = () => {
    return ( 
        <header className="w-screen flex justify-end">
            <div className="flex p-4 items-center gap-4">
                <Link href={"https://mail.google.com"} className="hover:underline">
                <p className="text-sm text-slate-500">Gmail</p>
                </Link>
                <Link href={"https://www.google.com/images"} className="hover:underline">
                <p  className="text-sm text-slate-500">Images</p>
                </Link>
                <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-3xl" />
                <button className="bg-[#392467] p-2 text-white rounded-lg font-medium hover:brightness-105 hover:shadow-md transition-shadow">Sign in</button>
            </div>
        </header>
     );
}
 
export default HomeHeader;