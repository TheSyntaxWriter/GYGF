import React, { useState } from "react";
import siteConfig from "../siteConfig";
import logo from "../assets/logo.png";

const navLinks = [
  { to: "#home", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#programs", label: "Programs" },
  { to: "#events", label: "Events" },
  { to: "#donate", label: "Donate" },
  { to: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo-area" onClick={closeMenu}>
          <img src={logo} alt={`${siteConfig.siteName} logo`} className="logo-img" />
          <h2 className="logo-text">{siteConfig.siteName}</h2>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
        >
          <span></span><span></span><span></span>
        </button>

        <ul id="primary-menu" className={`menu ${menuOpen ? "menu-open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <a href={link.to} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
