import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Get in touch with us for yoga programs and events.</p>

      {/* CONTACT DETAILS */}
      <div className="contact-details">
        <p>
          <FaPhone /> Phone:
          <a href="tel:9412335099"> 9412335099</a>
        </p>

        <p>
          <FaEnvelope /> Email:
          <a href="mailto:rudraksha7505021514@gmail.com">
            {" "}
            rudraksha7505021514@gmail.com
          </a>
        </p>

        <p>
          <FaWhatsapp /> WhatsApp:
          <a href="https://wa.me/919412335099" target="_blank" rel="noreferrer">
            {" "}
            Chat Now
          </a>
        </p>

        <p>
          <FaInstagram /> Instagram:
          <a
            href="https://instagram.com/pathak.prashant.ji"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            pathak.prashant.ji
          </a>
        </p>

        <p>
          <FaFacebook /> Facebook:
          <a
            href="https://facebook.com/pathak.prashant.ji"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            pathak.prashant.ji
          </a>
        </p>

        <p>
          <FaYoutube /> YouTube:
          <a
            href="https://youtube.com/@TheSyntaxWriter"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            The Syntax Writer
          </a>
        </p>
      </div>

      {/* FORM */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
