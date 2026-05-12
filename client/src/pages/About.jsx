import React from "react";
import siteConfig from "../siteConfig";

const About = () => {
  return (
    <div className="container">
      <h1>About {siteConfig.siteName}</h1>

      <p>
        {siteConfig.siteName} is dedicated to spreading the ancient wisdom of
        yoga, meditation, and spiritual growth.
      </p>

      <p>
        Our mission is to build a healthier, peaceful, and conscious society
        through yoga education, meditation practices, and community wellness
        programs.
      </p>
    </div>
  );
};

export default About;
