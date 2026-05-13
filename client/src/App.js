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
  { title: "Meditation Workshop", date: "Every 4th Saturday", location: "Gayatri Yog Gurukulam Foundation Practice Hall" },
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

        <section id="about" className="section-card">
          <h2>About {siteConfig.siteName}</h2>
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

        <ImageCarousel />

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
          <div className="donation-card premium-layout">
            <div className="donation-qr-panel">
              <div className="qr-frame">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=https%3A%2F%2Fwa.me%2F919675763044" alt="QR code to donate to Gayatri Yog Gurukulam Foundation" className="qr-image" loading="lazy" />
              </div>
            </div>
            <div className="donation-content">
              <p className="donation-kicker">Wellness • Service • Sadhana</p>
              <h2>Support Our Mission</h2>
              <p>Your contribution helps us organize free yoga camps, wellness outreach programs, and spiritual learning initiatives.</p>
              <p className="scan-text">Scan the QR code to contribute securely.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section-card contact-section">
          <div className="contact-left">
            <h2>Connect With Us</h2>
            <p>We welcome your support and participation in our wellness mission.</p>
            <div className="contact-links">
              <a href="https://instagram.com/praveenpathakyoga" target="_blank" rel="noreferrer" className="contact-item">
                <FaInstagram />
                <span><strong>Instagram</strong><small>Follow us on Instagram</small>@praveenpathakyoga</span>
              </a>
              <a href="https://facebook.com/Praveen.pathak.737001" target="_blank" rel="noreferrer" className="contact-item">
                <FaFacebook />
                <span><strong>Facebook</strong><small>Join our Facebook community</small>Praveen Pathak</span>
              </a>
              <a href="https://youtube.com/@praveenpathakyoga" target="_blank" rel="noreferrer" className="contact-item">
                <FaYoutube />
                <span><strong>YouTube</strong><small>Watch guided yoga sessions</small>@praveenpathakyoga</span>
              </a>
              <a href="mailto:vistraxindia@gmail.com" className="contact-item">
                <FaEnvelope />
                <span><strong>Email</strong><small>Reach us anytime</small>vistraxindia@gmail.com</span>
              </a>
              <a href="https://wa.me/919675763044" target="_blank" rel="noreferrer" className="contact-item">
                <FaWhatsapp />
                <span><strong>WhatsApp</strong><small>Message us directly</small>+91 9675763044</span>
              </a>
            </div>
          </div>
          <div className="contact-right">
            <div className="owner-image-wrap">
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80" alt="Yoga practitioner in a calm meditative pose" className="owner-image" loading="lazy" />
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
