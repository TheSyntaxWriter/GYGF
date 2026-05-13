import React from "react";
import siteConfig from "../siteConfig";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {siteConfig.shortName} - {siteConfig.siteName}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
