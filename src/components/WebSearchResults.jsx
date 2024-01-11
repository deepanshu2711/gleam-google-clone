import Link from "next/link";
import Parser from "html-react-parser"
import PaginationButtons from "./PaginationButtons";
const WebSearchResults = ({results}) => {
    
    return ( 
        <div className="w-full pb-24 mx-auto px-3 pl-[5%] md:pl-[14%]">
            <p className="text-gray-500 text-sm mb-5 mt-3">
               About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds)
            </p>
            {
                results.items?.map((result) =>(
                    <div key={result.link} className="mb-8 max-w-3xl">
                        <div className="group ">
                            <Link href={result.link} className="truncate">
                                <p className="text-sm text-purple-950 ">{result.formattedUrl}</p>
                            </Link>
                            <Link href={result.link} className="truncate group-hover:underline " >
                                <h2 className="text-lg text-purple-950 hover:underline decoration-2 hover:text-[#A367B1] ">{result.title}</h2>
                            </Link>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-3">{Parser(result.htmlSnippet)}</p>
                    </div>
                ))
            }
            <div className="mb-8">
            <PaginationButtons />
            </div>
        </div>
     );
}
 
export default WebSearchResults;