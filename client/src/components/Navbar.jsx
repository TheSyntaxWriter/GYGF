import React from "react";
import siteConfig from "../siteConfig";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        {/* LOGO AREA */}
        <div className="logo-area">
          <img src={logo} alt="logo" className="logo-img" />
          <h2 className="logo-text">{siteConfig.siteName}</h2>
        </div>

        {/* MENU */}
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/services">Programs</Link>
          </li>

          <li>
            <Link to="/events">Events</Link>
          </li>

          <li>
            <Link to="/donate">Donate</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
