import React from "react";
import siteConfig from "../siteConfig";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero">
        <h1>Welcome to {siteConfig.siteName}</h1>
        <p>Transform your life with Yoga & Meditation</p>
      </div>

      {/* WELCOME SECTION */}
      <div className="container">
        <h2>Welcome to {siteConfig.siteName}</h2>

        <p>
          Our mission is to spread the ancient wisdom of yoga, meditation, and
          spiritual awareness across the world.
        </p>
      </div>

      {/* PROGRAMS SECTION */}
      <div className="programs">
        <h2>Our Programs</h2>

        <div className="program-cards">
          <div className="card" onClick={() => navigate("/services")}>
            <h3>Yoga Training</h3>
            <p>Learn traditional yoga for physical and mental health.</p>
          </div>

          <div className="card" onClick={() => navigate("/services")}>
            <h3>Meditation</h3>
            <p>Practice meditation for inner peace and mindfulness.</p>
          </div>

          <div className="card" onClick={() => navigate("/services")}>
            <h3>Community Yoga</h3>
            <p>Free yoga camps for community health and wellness.</p>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="about">
        <h2>About {siteConfig.siteName}</h2>

        <p>
          {siteConfig.siteName} is dedicated to spreading the ancient wisdom of
          yoga, meditation, and spiritual growth. Our aim is to build a
          healthier, peaceful, and conscious society through yoga education and
          community wellness programs.
        </p>

        <button onClick={() => navigate("/about")}>Learn More</button>
      </div>

      {/* DONATE SECTION */}
      <div className="donate">
        <h2>Support Our Mission</h2>

        <p>
          Help us spread yoga and wellness across the world. Your support allows
          us to organize free yoga camps and community health initiatives.
        </p>

        <button className="donate-btn" onClick={() => navigate("/donate")}>
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Home;
