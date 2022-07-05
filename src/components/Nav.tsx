import React from "react";
import { NavLink } from "react-router-dom";
import { FaBookDead, FaBook, FaBookOpen, FaCog, FaUser } from "react-icons/fa";
import logo from "../img/BookHunter-Logo.png";

const styleCustom = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  minHeight: '10vh',
  background: 'repeating-linear-gradient(#333fe4, #333523)',
  listStyle: 'none',
  color: '#fff',
  transition: 'all 0.3s ease-in 0s',
  maxHeight: '20vh',
}

const Nav = () => {
  return (
    <nav className="nav-container">
      <NavLink to="/">
        <div className="nav-title">
          <img src={logo} alt="logo" />
        </div>
      </NavLink>
      <div className="menu">
        <NavLink
          className="main-nav"
          to="/about"
        >
          <FaBookOpen className="icon" /> About
        </NavLink>
        <NavLink
          className="main-nav"
          to="/search"
        >
          <FaBookDead className="icon" /> The King
        </NavLink>
        <NavLink
          className="main-nav"
          to="/searchbooks"
        >
          <FaBook className="icon" /> Books
        </NavLink>
        <NavLink
          className="main-nav"
          to="/configurations"
        >
          <FaCog className="icon" /> Config
        </NavLink>

        <NavLink
          className="main-nav"
          to="/signup"
        >
          <FaUser className="icon" />
        </NavLink>

        <NavLink
          className="main-nav"
          to="/signin"
        >
          <FaUser className="icon" />
        </NavLink>

        <NavLink
          className="main-nav"
          to="/account"
        >
          <FaUser className="icon" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
