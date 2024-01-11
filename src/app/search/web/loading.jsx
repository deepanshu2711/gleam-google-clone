const Loading = () => {
    return ( 
        <div className="max-w-6xl flex flex-col  mx-2 pt-10  lg:pl-52 animate-pulse gap-10">
            <div className="flex flex-col ">
                <div className=" h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-3.5 w-[360px] bg-gray-200 rounded-full mb-2.5"></div>
                <div className=" h-3.5 w-[560px] bg-gray-200 rounded-full mb-2.5"></div>
                
            </div>
            <div className="flex flex-col">
                <div className=" h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-3.5 w-[360px] bg-gray-200 rounded-full mb-2.5"></div>
                <div className=" h-3.5 w-[560px] bg-gray-200 rounded-full mb-2.5"></div>
                
            </div>
            <div className="flex flex-col">
                <div className=" h-2.5 w-48 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-3.5 w-[360px] bg-gray-200 rounded-full mb-2.5"></div>
                <div className=" h-3.5 w-[560px] bg-gray-200 rounded-full mb-2.5"></div>
                
            </div>
        </div>
     );
}
 
export default Loading;
