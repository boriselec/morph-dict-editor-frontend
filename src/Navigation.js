import React from 'react';

const Navigation = () => (
    <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Morphological Dictionary</a>
        <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
            <span className="navbar-toggler-icon"/>
        </button>

        <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Index</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Download</a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" placeholder="Search" aria-label="Search" type="text"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
);

export default Navigation;