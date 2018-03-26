import React from 'react';
import NavigationTab from "./NavigationTab";
import SearchForm from "./SearchForm";

const Navigation = ({onSearch}) => (
    <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Morphological Dictionary</a>
        <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
            <span className="navbar-toggler-icon"/>
        </button>

        <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
                <NavigationTab title='Index'/>
                <NavigationTab title='Download'/>
            </ul>
            <SearchForm onSearch={onSearch}/>
        </div>
    </nav>
);

export default Navigation;