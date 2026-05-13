import React from "react";
import siteConfig from "../siteConfig";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="hero">
        <p className="hero-badge">Ancient Wisdom • Modern Wellness</p>
        <h1>Welcome to {siteConfig.siteName}</h1>
        <p>Transform your life with Yoga, Meditation, and Community Harmony.</p>
        <div className="hero-cta-group">
          <button className="btn btn-primary" onClick={() => navigate("/services")}>Explore Programs</button>
          <button className="btn btn-secondary" onClick={() => navigate("/contact")}>Get in Touch</button>
        </div>
      </section>

      <section className="container section-card">
        <h2>Welcome to {siteConfig.siteName}</h2>
        <p>
          Our mission is to spread the ancient wisdom of yoga, meditation, and
          spiritual awareness across the world.
        </p>
      </section>

      <section className="programs">
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
      </section>

      <section className="about section-card">
        <h2>About {siteConfig.siteName}</h2>

        <p>
          {siteConfig.siteName} is dedicated to spreading the ancient wisdom of
          yoga, meditation, and spiritual growth. Our aim is to build a
          healthier, peaceful, and conscious society through yoga education and
          community wellness programs.
        </p>

        <button className="btn btn-primary" onClick={() => navigate("/about")}>Learn More</button>
      </section>

      <section className="donate">
        <h2>Support Our Mission</h2>

        <p>
          Help us spread yoga and wellness across the world. Your support allows
          us to organize free yoga camps and community health initiatives.
        </p>

        <button className="btn donate-btn" onClick={() => navigate("/donate")}>
          Donate Now
        </button>
      </section>
    </div>
  );
};

export default Home;
