import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBookDead, FaBook, FaBookOpen, FaCog, FaUser } from 'react-icons/fa';
import logo from '../img/BookHunter-Logo.png';
import { UseTheme } from '../contexts/ThemeContext';

const Nav = () => {
    const { navColor, navTypoColor }: any = UseTheme();

    const dynamicStyleNav: any = {
        backgroundColor: navColor,
    };

    const dynamicStyleTypoNav: any = {
        color: navTypoColor,
    };

    return (
        <nav className="nav-container" style={dynamicStyleNav}>
            <NavLink to="/">
                <div className="nav-title">
                    <img className="logo" src={logo} alt="logo" />
                </div>
            </NavLink>
            <div className="menu">
                <NavLink
                    className="main-nav"
                    style={dynamicStyleTypoNav}
                    to="/about"
                >
                    <FaBookOpen className="icon" /> About
                </NavLink>
                <NavLink
                    className="main-nav"
                    style={dynamicStyleTypoNav}
                    to="/search"
                >
                    <FaBookDead className="icon" /> The King
                </NavLink>
                <NavLink
                    className="main-nav"
                    style={dynamicStyleTypoNav}
                    to="/searchbooks"
                >
                    <FaBook className="icon" /> Books
                </NavLink>
                <NavLink
                    className="main-nav"
                    style={dynamicStyleTypoNav}
                    to="/configurations"
                >
                    <FaCog className="icon" /> Config
                </NavLink>

                <NavLink
                    className="main-nav"
                    style={dynamicStyleTypoNav}
                    to="/signup"
                >
                    <FaUser className="icon" />
                </NavLink>

                <NavLink
                    className="main-nav"
                    style={dynamicStyleTypoNav}
                    to="/signin"
                >
                    <FaUser className="icon" />
                </NavLink>

                <NavLink
                    className="main-nav"
                    style={dynamicStyleTypoNav}
                    to="/account"
                >
                    <FaUser className="icon" />
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;
