import React from 'react';

const Search = ({searchText}) => (
    <h6 className="border-bottom border-gray pb-2 mb-0">
        {searchText ? 'Search: ' + searchText : 'All entries'}
    </h6>
);

export default Search;