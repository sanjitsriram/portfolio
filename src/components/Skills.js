import React from "react";
import "../styles/Skills.css";


export default function ContactForm() {
  return (
    <div className="cf-container">
      <div className="cf-content-wrapper">
        <div className="cf-left">
          <h2>Got a project?<br />Let’s talk.</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
          <a href="mailto:hi@carlos.com" className="cf-email-link">
            hi@<span>carlos.com</span>
            <span className="cf-arrow">→</span>
          </a>
        </div>

        <div className="cf-right">
          <h2>Estimate your project?<br />Let me know here.</h2>
          <form className="cf-form">
            <input type="text" placeholder="What’s your name?" />
            <input type="email" placeholder="Your fancy email" />
            <div className="cf-textarea-wrapper">
              <textarea placeholder="Tell me about your project"></textarea>
              <button type="submit" className="cf-send-btn">→</button>
            </div>
          </form>
        </div>
      </div>

      <div className="cf-footer">
        <div className="cf-logo">🟡</div>
        <p><strong>Thanks for scrolling</strong>, that’s all folks.</p>
        <div className="cf-icons">
          <span className="cf-icon">⚙️</span>
          <span className="cf-icon">📷</span>
          <span className="cf-icon">🔗</span>
        </div>
      </div>
    </div>
  );
}
