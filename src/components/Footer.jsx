import CountryLookup from "./CountryLookup";

const Footer = () => {
    return ( 
        //
        <footer className="flex flex-col w-screen absolute bottom-0   bg-[#FFD1E3] bg-opacity-10">
            <div className="w-full flex px-4 pt-4 cursor-pointer text-[#392467]">

                <CountryLookup />
            </div>
            <div className=" flex flex-col items-center gap-3  md:justify-between  p-3 border-t border-gray-400  md:flex-row">
                <ul className="flex gap-5 items-center text-[#392467]  ">
                    <li className="hover:underline cursor-pointer">About</li>
                    <li className="hover:underline cursor-pointer">Advertising</li>
                    <li className="hover:underline cursor-pointer">Business</li>
                    <li className="hover:underline cursor-pointer">How Search Works</li>
                </ul>

                <ul className="flex gap-5 p-1 items-center text-[#392467]">
                    <li className="hover:underline  cursor-pointer">Privacy</li>
                    <li className="hover:underline  cursor-pointer">Terms</li>
                    <li className="hover:underline  cursor-pointer">Settings</li>

                </ul>
            </div>
        </footer>
     );
}
 
export default Footer;