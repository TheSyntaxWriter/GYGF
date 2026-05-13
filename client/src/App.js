import React from "react";
import Navbar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";
import Footer from "./components/Footer";
import siteConfig from "./siteConfig";
import { FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "./styles/main.css";

const programs = [
  { title: "Yoga Training", text: "Build flexibility, strength, and holistic balance with guided traditional practice." },
  { title: "Meditation Sessions", text: "Develop deep focus and inner calm with daily breath-led meditation." },
  { title: "Community Yoga", text: "Join open wellness camps designed to bring mindful health to every community." },
  { title: "Kids Yoga", text: "Fun and disciplined sessions that improve confidence, posture, and concentration." },
];

const events = [
  { title: "Free Yoga Camp", date: "Every 2nd Sunday", location: "Community Wellness Grounds" },
  { title: "Meditation Workshop", date: "Every 4th Saturday", location: "GYGF Practice Hall" },
];

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="hero">
          <p className="hero-badge">Ancient Wisdom • Modern Wellness</p>
          <h1>Welcome to {siteConfig.siteName}</h1>
          <p>Transform your life through yoga, mindful breathing, and spiritual discipline.</p>
          <div className="hero-cta-group">
            <a className="btn btn-primary" href="#programs">Explore Programs</a>
            <a className="btn btn-secondary" href="#contact">Get in Touch</a>
          </div>
        </section>

        <ImageCarousel />

        <section id="about" className="section-card">
          <h2>About {siteConfig.shortName}</h2>
          <p>
            {siteConfig.siteName} is dedicated to spreading yoga, meditation, and spiritual growth
            through meaningful, practical programs that support healthier and more conscious lives.
          </p>
        </section>

        <section id="programs" className="section-card">
          <h2>Our Programs</h2>
          <div className="grid-cards">
            {programs.map((program) => (
              <article key={program.title} className="card">
                <h3>{program.title}</h3>
                <p>{program.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="events" className="section-card">
          <h2>Events</h2>
          <div className="grid-cards">
            {events.map((event) => (
              <article key={event.title} className="card">
                <h3>{event.title}</h3>
                <p><strong>{event.date}</strong></p>
                <p>{event.location}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="donate" className="section-card donate-section">
          <div className="donation-card">
            <h2>Support Our Mission</h2>
            <p>Your contribution helps us organize free yoga camps and wellness outreach programs.</p>
            <p className="scan-text">Scan &amp; Donate</p>
            <img src="/assets/qr_img.png" alt="QR code to donate to GYGF" className="qr-image" loading="lazy" />
            <a href="#contact" className="btn btn-primary">Contribute Now</a>
          </div>
        </section>

        <section id="contact" className="section-card contact-section">
          <div className="contact-left">
            <h2>Connect With Us</h2>
            <p>We welcome your support and participation in our wellness mission.</p>
            <div className="contact-links">
              <a href="mailto:rudraksha7505021514@gmail.com"><FaEnvelope /> Email</a>
              <a href="https://wa.me/919412335099" target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp</a>
              <a href="https://instagram.com/pathak.prashant.ji" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a>
              <a href="https://facebook.com/pathak.prashant.ji" target="_blank" rel="noreferrer"><FaFacebook /> Facebook</a>
              <a href="https://youtube.com/@TheSyntaxWriter" target="_blank" rel="noreferrer"><FaYoutube /> YouTube</a>
            </div>
            <div className="hero-cta-group">
              <a className="btn btn-primary" href="https://wa.me/919412335099" target="_blank" rel="noreferrer">Join via WhatsApp</a>
              <a className="btn btn-secondary btn-dark" href="mailto:rudraksha7505021514@gmail.com">Email Us</a>
            </div>
          </div>
          <div className="contact-right">
            <div className="owner-image-wrap">
              <img src="/assets/contact_img.png" alt="GYGF founder portrait" className="owner-image" loading="lazy" />
            </div>
            <blockquote>“Discipline your breath, and the mind discovers peace.”</blockquote>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
