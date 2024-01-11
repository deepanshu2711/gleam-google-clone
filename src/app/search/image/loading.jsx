const Loading = () => {
    return ( 
        <div className=" max-w-6xl mb-24 mx-2 pt-10 space-x-7 pb-24 lg:pl-52 flex flex-col sm:flex-row gap-8">

            <div className="animate-pulse sm:flex hidden sm: flex-col">
                <div className="h-48 w-48 bg-gray-200 mb-4 rounded-l-md"></div>
                <div className="h-2 w-48 bg-gray-200 mb-2.5 rounded-l-md"></div>
                <div className="h-2 w-44 bg-gray-200 mb-2.5 rounded-l-md"></div>
                
            </div>
            <div className="animate-pulse">
                <div className="h-48 w-48 bg-gray-200 mb-4 rounded-l-md"></div>
                <div className="h-2 w-48 bg-gray-200 mb-2.5 rounded-l-md"></div>
                <div className="h-2 w-44 bg-gray-200 mb-2.5 rounded-l-md"></div>
                
            </div>
            <div className="animate-pulse sm:flex hidden sm: flex-col">
                <div className="h-48 w-48 bg-gray-200 mb-4 rounded-l-md"></div>
                <div className="h-2 w-48 bg-gray-200 mb-2.5 rounded-l-md"></div>
                <div className="h-2 w-44 bg-gray-200 mb-2.5 rounded-l-md"></div>
                
            </div>
            
        </div>
     );
}
 
export default Loading;
