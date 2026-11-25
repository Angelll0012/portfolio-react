function SearchBar({search, setSearch}) {
    // render the project heading and controlled search input
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between md:col-start-2 md:row-start-1">
            <h2 className="text-2xl font-bold">My projects</h2>
            {/* render a text input whose value is controlled by the parent */}
            <input className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 sm:max-w-xs" type="text" placeholder="Search projects..." value={search} onChange={(event) => setSearch(event.target.value)} />
        </div>
    );
}

export default SearchBar;