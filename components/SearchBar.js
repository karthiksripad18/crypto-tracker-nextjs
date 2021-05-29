function SearchBar({search, handleInputChange}) {
    return (
        <div className="flex items-center w-300px">
            <input className="bg-gray-500 p-3 rounded outline-none font-bold" placeholder="Search" value={search} type="text" onChange={(e) => handleInputChange(e)} />
        </div>
    )
}

export default SearchBar;
