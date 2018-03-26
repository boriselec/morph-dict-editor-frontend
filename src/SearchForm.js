import React from 'react';

const SearchForm = ({onSearch}) => (
    <form className="form-inline my-2 my-lg-0" onSubmit={function(e) {e.preventDefault(); onSearch(e.target[0].value)}}>
        <input className="form-control mr-sm-2" placeholder="Search" aria-label="Search" type="text"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
);

export default SearchForm;