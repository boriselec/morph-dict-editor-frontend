import React from 'react';
import NavigationTab from './NavigationTab';
import SearchForm from './SearchForm';

const Navigation = ({onSearch, onTab, activeIndex}) => (
    <nav className='navbar navbar-expand-md fixed-top navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>Morphological Dictionary</a>
        <button className='navbar-toggler p-0 border-0' type='button' data-toggle='offcanvas'>
            <span className='navbar-toggler-icon'/>
        </button>

        <div className='navbar-collapse offcanvas-collapse' id='navbarsExampleDefault'>
            <ul className='navbar-nav mr-auto'>
                <NavigationTab title='Index' index={0} onClick={onTab} activeIndex={activeIndex}/>
                <NavigationTab title='Download' index = {1} onClick={onTab} activeIndex={activeIndex}/>
                <NavigationTab title='Edit' index = {2} onClick={onTab} activeIndex={activeIndex}/>
                <NavigationTab title='About' index = {3} onClick={onTab} activeIndex={activeIndex}/>
            </ul>
            <SearchForm onSearch={onSearch}/>
        </div>
    </nav>
);

export default Navigation;