import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = ()=>{
    return(
    <header id="header">
        <div className="container d-flex header-nav-mobile">

        <div className="logo mr-auto">
            <h1 className="text-light"><NavLink to="/">Sophy's Upholstery</NavLink></h1>
        </div>

        <nav className="nav-menu d-lg-block">
            <ul>
                <li><NavLink exact to="/" activeStyle={{color: "#f03c02"}}>Home</NavLink></li>
                <li><NavLink to="/about" activeStyle={{color: "#f03c02"}}>About</NavLink></li>
                <li className="mobile-off"><NavLink to="/gallery" activeStyle={{color: "#f03c02"}}>Gallery</NavLink></li>
                <li><NavLink to="/contact" activeStyle={{color: "#f03c02"}}>Contact</NavLink></li>
                <li><a href="https://www.yelp.com/biz/sophys-upholstery-whitestone" target="_blank" rel="noopener noreferrer">Reviews</a></li>
                <li><a href="https://www.facebook.com/sophys.uphosltery" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
        </nav>

        </div>
    </header>
    );
};

export default NavBar;