import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services">
      {/* HEADER */}
      <div className="services-header">
        <h1>Our Programs</h1>
        <p>Explore our yoga and wellness programs designed for everyone.</p>
      </div>

      {/* PROGRAM CARDS */}
      <div className="services-container">
        <div className="service-card">
          <h2>Yoga Training</h2>
          <p>
            Learn traditional yoga techniques to improve flexibility, strength,
            and overall well-being.
          </p>
          <button onClick={() => navigate("/contact")}>Join Now</button>
        </div>

        <div className="service-card">
          <h2>Meditation Sessions</h2>
          <p>
            Practice meditation to achieve inner peace, reduce stress, and
            enhance focus in daily life.
          </p>
          <button onClick={() => navigate("/contact")}>Join Now</button>
        </div>

        <div className="service-card">
          <h2>Community Yoga</h2>
          <p>
            Participate in free yoga camps organized for community health and
            wellness awareness.
          </p>
          <button onClick={() => navigate("/contact")}>Join Now</button>
        </div>

        <div className="service-card">
          <h2>Kids Yoga</h2>
          <p>
            Special yoga sessions designed for children to improve focus,
            discipline, and physical fitness.
          </p>
          <button onClick={() => navigate("/contact")}>Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
