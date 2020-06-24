import React from 'react';
import './Stylesheets/Navbar.css';
import logo from './images/profilepictures.png';

const Navbar = () => {
    return (
        <div className="Nav">
            <div className="navbar-brand">
            <img className="logo" src={logo} /><p className="brand"> Ferdian AR</p>
            </div>
            <div className="navigation">
                <a href="">Homepage</a>
                <a href="">Experience</a>
                <a href="">Portfolio</a>
                <a href="">About</a>
            </div>
        </div>
    )
}

export default Navbar;