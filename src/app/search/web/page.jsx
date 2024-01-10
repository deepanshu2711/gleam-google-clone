

const WebSearchPage = async({searchParams}) => {

    const responce = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`);
    const data = await responce.json();
    const results = data.items;
    
    return ( 
        <div>
            {results && results.map((result) =>(
                <h1 key={result.link}>{result.title}</h1>
            ))}
        </div>
     );
}
 
export default WebSearchPage;