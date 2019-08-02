import React from 'react'

export default props => (
    <header className="main-header">
        <a href="/#/" className="logo">
            <span className="logo-mini"><b>My</b>M</span>
            <span className="logo-lg">
                <i className="fa fa-money"></i>
                <b> My</b> Money
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <button 
                className="sidebar-toggle"
                data-toggle="offcanvas"
                style={{ border: "none", outline: "none" }}
            ></button>
        </nav>
    </header>
)