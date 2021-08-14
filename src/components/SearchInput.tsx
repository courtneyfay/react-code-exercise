import React from 'react';

const SearchInput = () => {
    return (
        <>
            <div>
                <label htmlFor="search-param">Choose a search term:</label>
                <input type="text" id="search-param" name="search-param" />
            </div>
            <div>
                <button type="submit">Search</button>
            </div>
        </>
    )
};

export default SearchInput;
