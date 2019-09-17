import React from "react";
import { NavLink } from "react-router-dom";
import { FaBookDead, FaBook, FaBookOpen } from "react-icons/fa";
import logo from "../img/BookHunter-Logo.png";

const Nav = () => {
  return (
    <nav className="nav-container">
      <NavLink to="/">
        <h1 className="nav-title">
          <img src={logo} alt="logo" />
        </h1>
      </NavLink>
      <div className="menu">
        <NavLink
          className="main-nav"
          activeClassName="main-nav-active"
          exact
          to="/about"
        >
          <FaBookOpen className="icon" /> About
        </NavLink>
        <NavLink
          className="main-nav"
          activeClassName="main-nav-active"
          exact
          to="/search"
        >
          <FaBookDead className="icon" /> The King
        </NavLink>
        <NavLink
          className="main-nav"
          activeClassName="main-nav-active"
          exact
          to="/searchbooks"
        >
          <FaBook className="icon" /> Books
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
