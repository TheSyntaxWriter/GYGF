import React from "react";

const Events = () => {
  return (
    <div className="events">
      <h1>Our Events</h1>
      <p>Join our upcoming yoga and wellness events.</p>

      <div className="event-card">
        <h3>Free Yoga Camp</h3>
        <p>Date: 15 April</p>
        <p>Location: Local Community Park</p>
      </div>

      <div className="event-card">
        <h3>Meditation Workshop</h3>
        <p>Date: 20 April</p>
        <p>Location: Yog Center</p>
      </div>
    </div>
  );
};

export default Events;
