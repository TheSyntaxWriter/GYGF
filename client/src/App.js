import React from "react";
import Navbar from "./components/Navbar";
import ImageCarousel from "./components/ImageCarousel";
import Footer from "./components/Footer";
import siteConfig from "./siteConfig";

import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

import "./styles/main.css";

/* =========================================================
   LOCAL ASSETS
   ========================================================= */
import heroImage from "./assets/img01.jpeg";
import donationQrImage from "./assets/qr_img.jpeg";
import contactImage from "./assets/contact_img.jpeg";

/* =========================================================
   PROGRAMS DATA
   ========================================================= */
const programs = [
  {
    title: "Yoga Training",
    text: "Build flexibility, strength, and holistic balance with guided traditional practice.",
  },
  {
    title: "Meditation Sessions",
    text: "Develop deep focus and inner calm with daily breath-led meditation.",
  },
  {
    title: "Community Yoga",
    text: "Join open wellness camps designed to bring mindful health to every community.",
  },
  {
    title: "Kids Yoga",
    text: "Fun and disciplined sessions that improve confidence, posture, and concentration.",
  },
];

/* =========================================================
   EVENTS DATA
   ========================================================= */
const events = [
  {
    title: "Free Yoga Camp",
    date: "Every 2nd Sunday",
    location: "Community Wellness Grounds",
  },
  {
    title: "Meditation Workshop",
    date: "Every 4th Saturday",
    location: "Gayatri Yog Gurukulam Foundation Practice Hall",
  },
];

function App() {
  return (
    <>
      {/* =========================================================
         NAVBAR
         ========================================================= */}
      <Navbar />

      <main>
        {/* =========================================================
           HERO SECTION
           ========================================================= */}
        <section
          id="home"
          className="hero"
          style={{
            backgroundImage: `
              linear-gradient(
                130deg,
                rgba(10, 14, 22, 0.72),
                rgba(36, 22, 10, 0.38)
              ),
              url(${heroImage})
            `,
          }}
        >
          {/* Small top badge */}
          <p className="hero-badge">Ancient Wisdom • Modern Wellness</p>

          {/* Hero heading */}
          <h1>
            <span>Welcome to</span>
            <strong>{siteConfig.siteName}</strong>
          </h1>

          {/* Hero description */}
          <p>
            Transforming lives through yoga, discipline, breathwork, and
            spiritual wellness.
          </p>

          {/* Hero buttons */}
          <div className="hero-cta-group">
            <a className="btn btn-primary" href="#programs">
              Explore Programs
            </a>

            <a className="btn btn-secondary" href="#contact">
              Get in Touch
            </a>
          </div>
        </section>

        {/* =========================================================
           ABOUT SECTION
           ========================================================= */}
        <section id="about" className="section-card">
          <h2>About {siteConfig.siteName}</h2>

          <p>
            {siteConfig.siteName} is dedicated to spreading yoga, meditation,
            and spiritual growth through meaningful, practical programs that
            support healthier and more conscious lives.
          </p>
        </section>

        {/* =========================================================
           PROGRAMS SECTION
           ========================================================= */}
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

        {/* =========================================================
           IMAGE CAROUSEL
           ========================================================= */}
        <ImageCarousel />

        {/* =========================================================
           EVENTS SECTION
           ========================================================= */}
        <section id="events" className="section-card">
          <h2>Events</h2>

          <div className="grid-cards">
            {events.map((event) => (
              <article key={event.title} className="card">
                <h3>{event.title}</h3>

                <p>
                  <strong>{event.date}</strong>
                </p>

                <p>{event.location}</p>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================
           DONATION SECTION
           Updated Layout:
           LEFT  -> Donation Information
           RIGHT -> QR Code
           ========================================================= */}
        <section id="donate" className="section-card donate-section">
          <div className="donation-card premium-layout">
            {/* =====================================================
               LEFT SIDE : DONATION CONTENT
               ===================================================== */}
            <div className="donation-content">
              {/* Small heading label */}
              <p className="donation-kicker">Wellness • Service • Sadhana</p>

              {/* Main title */}
              <h2>Support Our Mission</h2>

              {/* Description */}
              <p>
                Your contribution helps us organize free yoga camps, wellness
                outreach programs, and spiritual learning initiatives.
              </p>

              {/* QR instruction */}
              <p className="scan-text">
                Scan the QR code to contribute securely.
              </p>
            </div>

            {/* =====================================================
               RIGHT SIDE : QR DONATION PANEL
               ===================================================== */}
            <div className="donation-qr-panel">
              <div className="qr-frame">
                <img
                  src={donationQrImage}
                  alt="QR code to donate to Gayatri Yog Gurukulam Foundation"
                  className="qr-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
           CONTACT SECTION
           ========================================================= */}
        <section id="contact" className="section-card contact-section">
          {/* =====================================================
             LEFT SIDE : CONTACT DETAILS
             ===================================================== */}
          <div className="contact-left">
            <h2>Connect With Us</h2>

            <p>
              We welcome your support and participation in our wellness mission.
            </p>

            <div className="contact-links">
              {/* Instagram */}
              <a
                href="https://instagram.com/praveenpathakyoga"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <FaInstagram />

                <span>
                  <strong>Instagram</strong>
                  <small>Follow us on Instagram</small>
                  @praveenpathakyoga
                </span>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/Praveen.pathak.737001"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <FaFacebook />

                <span>
                  <strong>Facebook</strong>
                  <small>Join our Facebook community</small>
                  Praveen Pathak
                </span>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@praveenpathakyoga"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <FaYoutube />

                <span>
                  <strong>YouTube</strong>
                  <small>Watch guided yoga sessions</small>
                  @praveenpathakyoga
                </span>
              </a>

              {/* Email */}
              <a href="mailto:vistraxindia@gmail.com" className="contact-item">
                <FaEnvelope />

                <span>
                  <strong>Email</strong>
                  <small>Reach us anytime</small>
                  vistraxindia@gmail.com
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919675763044"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <FaWhatsapp />

                <span>
                  <strong>WhatsApp</strong>
                  <small>Message us directly</small>
                  +91 9675763044
                </span>
              </a>
            </div>
          </div>

          {/* =====================================================
             RIGHT SIDE : IMAGE + QUOTE
             ===================================================== */}
          <div className="contact-right">
            <div className="owner-image-wrap">
              <img
                src={contactImage}
                alt="Yoga practitioner in a calm meditative pose"
                className="owner-image"
                loading="lazy"
              />
            </div>

            <blockquote>
              “Discipline your breath, and the mind discovers peace.”
            </blockquote>
          </div>
        </section>
      </main>

      {/* =========================================================
         FOOTER
         ========================================================= */}
      <Footer />
    </>
  );
}

export default App;
