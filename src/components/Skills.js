import React from "react";
import "../styles/Skills.css";

export default function ContactForm() {
  return (
    <div className="contact-page">
      <div className="left-section">
        <h2>Got a project?<br />Let’s talk.</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
        </p>
        <a href="mailto:hi@carlos.com" className="email-link">
          hi@<span>carlos.com</span>
          <span className="arrow">→</span>
        </a>
      </div>
      <div className="right-section">
        <h2>Estimate your project?<br />Let me know here.</h2>
        <form className="contact-form">
          <input type="text" placeholder="What’s your name?" />
          <input type="email" placeholder="Your fancy email" />
          <div className="text-area-container">
            <textarea placeholder="Tell me about your project"></textarea>
            <button type="submit" className="send-button">→</button>
          </div>
        </form>
      </div>
      <div className="footer">
        <div className="logo">🟡</div>
        <p><strong>Thanks for scrolling</strong>, that’s all folks.</p>
        <div className="social-icons">
          <span className="icon">⚙️</span>
          <span className="icon">📷</span>
          <span className="icon">🔗</span>
        </div>
      </div>
    </div>
  );
}
