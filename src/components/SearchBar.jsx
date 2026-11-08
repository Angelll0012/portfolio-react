function SearchBar({search, setSearch}) {
    // render the project heading and controlled search input
    return (
        <div >
           
            <h2>My projects</h2>
            {/* render a text input whose value is controlled by the parent */}
            <input type="text" placeholder="Search projects..." value={search} onChange={(event) => setSearch(event.target.value)} />
   
        </div>
    );
  
}

export default SearchBar;