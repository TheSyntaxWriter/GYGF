import React, { useState } from "react";
import siteConfig from "../siteConfig";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Programs" },
  { to: "/events", label: "Events" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar" role="banner">
      <div className="nav-container">
        <NavLink to="/" className="logo-area" onClick={closeMenu}>
          <img src={logo} alt={`${siteConfig.shortName} logo`} className="logo-img" loading="lazy" />
          <h2 className="logo-text">{siteConfig.siteName}</h2>
        </NavLink>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul id="primary-menu" className={`menu ${menuOpen ? "menu-open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
