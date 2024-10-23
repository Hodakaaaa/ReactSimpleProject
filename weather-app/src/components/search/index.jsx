

export default function Search({search, setSearch, handleSearch}){
    return(
        <div className="search-engine">
            <input
            type = "text"
            className = "city-search"
            placeholder = "Enter a City Name which you like"
            name = "search"
            value = {search}
            onChange = {(event)=> setSearch(event.target.value)}
            />
            <button className="search-btn" onClick={handleSearch}>
                Search Weather
            </button>
            
            </div>
    );
}