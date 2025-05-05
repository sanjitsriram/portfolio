import React from "react";
import "../styles/Contact.css";
import { FaArrowRight } from "react-icons/fa";
import { FaCube, FaPaintBrush, FaDesktop } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <p className="section-label">— Contact</p>
          <h2 className="contact-heading">
            Any Type Of Query & Discussion.
          </h2>
          <p className="contact-description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </p>
          <a href="mailto:hi@carlos.com" className="contact-email">
            hi@carlos.com <FaArrowRight className="arrow-icon" />
          </a>
        </div>

        <div className="contact-right">
          <p className="quote">
            You can’t use up creativity, the more you use, more you have in your significant mind.
          </p>
          <p className="quote-sub">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
          </p>
          <div className="stats">
            <div className="stat-box">
              <h1>14</h1>
              <span>Years of Experience.</span>
            </div>
            <div className="stat-box">
              <h1>187</h1>
              <span>Satisfied Clients.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="services-grid">
        <div className="service-card highlighted">
          <FaCube className="service-icon" />
          <h3>Product Designer.</h3>
          <p>124 Projects</p>
        </div>
        <div className="service-card">
          <FaPaintBrush className="service-icon" />
          <h3>Branding Designer.</h3>
          <p>37 Projects</p>
        </div>
        <div className="service-card">
          <FaDesktop className="service-icon" />
          <h3>Full Stack Developer.</h3>
          <p>62 Projects</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
