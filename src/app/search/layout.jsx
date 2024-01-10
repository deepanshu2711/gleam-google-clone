import SearchHeader from "../../components/SearchHeader";

const SearchLayout = ({children}) => {
    return ( 
        <div>
            <SearchHeader />
            {children}
        </div>
     );
}
 
export default SearchLayout;