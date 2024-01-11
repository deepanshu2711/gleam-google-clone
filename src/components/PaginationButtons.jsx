"use client"
import Link from "next/link";
import { usePathname,useSearchParams } from "next/navigation";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";



const PaginationButtons = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams();
    const serachTerm = searchParams.get("searchTerm");
    const startIndex = +searchParams.get("start") || 1;


    return ( 
        <div className="text-[#392467] flex px-10 pb-4 justify-center sm:justify-start gap-40 ">
            {startIndex >=10 && (
                <Link href={`${pathname}?searchTerm=${serachTerm}&start=${startIndex - 10}`} className="hover:underline">
                    <div className="flex flex-col cursor-pointer items-center hover:underline">
                        <BsChevronLeft className="h-5" />
                        <p>Prev</p>
                    </div>
                </Link>
            )}
            {startIndex <=90 && (
                <Link href={`${pathname}?searchTerm=${serachTerm}&start=${startIndex + 10}`} className="hover:underline">
                    <div className="flex flex-col cursor-pointer items-center hover:underline">
                        <BsChevronRight className="h-5" />
                        <p>Next</p>
                    </div>
                </Link>
            )}
        </div>
     );
}
 
export default PaginationButtons;