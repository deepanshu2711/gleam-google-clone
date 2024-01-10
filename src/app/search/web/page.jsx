import Link from "next/link";
import WebSearchResults from "../../../components/WebSearchResults"

const WebSearchPage = async({searchParams}) => {

    const responce = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`);
    if(!responce.ok){
        throw new Error('Some Thing went Wrong');
    };
    
    const data = await responce.json();
    
    
    const results = data.items;
    if(!results){
        return ( 
            <div className="flex flex-col items-center justify-center pt-10">
                <h1 className="text-3xl mb-4 text-purple-950">No Results Found</h1>
                <p className="text-gray-500 text-sm">Try search something else or go back to homepage.</p>
                <Link href={"/"} className="mt-4 text-blue-500 font-semibold">
                    <p>Go Back</p>
                </Link>
            </div>
         );
    }
    
    return ( 
        <div className="">
            {results && <WebSearchResults  results = {data} />}
        </div>
     );
}
 
export default WebSearchPage;