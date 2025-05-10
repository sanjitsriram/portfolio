import React from "react";
import "../styles/Skills.css";
import Taskitimg from "../assests/taskitlogo.png";

export default function ContactForm() {
  return (
    <div className="cf-container">
      <div className="cf-content-wrapper scroll-fade-in">
        <div className="cf-left">
          <h2>
            Got a project?
            <br />
            Let’s talk.
          </h2>
          <p>
            I help turn ideas into real products. If you're planning something awesome, I'm here to help.
          </p>
          <a href="https://www.taskiit.me" className="cf-email-link" target="_blank" rel="noopener noreferrer">
            www.<span>taskiit.me</span>
            <span className="cf-arrow">→</span>
          </a>
        </div>

        <div className="cf-right">
          <h2>
            Estimate your project?
            <br />
            Let me know here.
          </h2>
          <form className="cf-form">
            <input type="text" placeholder="What’s your name?" />
            <input type="email" placeholder="Your email address" />
            <div className="cf-textarea-wrapper">
              <textarea placeholder="Tell me a bit about your project"></textarea>
              <button type="submit" className="cf-send-btn-text">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="cf-footer scroll-fade-in">
        <div className="cf-logo">
          <img src={Taskitimg} alt="Taskit Logo" />
        </div>
        <p>
          <strong>Thanks for scrolling</strong>, looking forward to connecting with you!
        </p>
        <div className="cf-icons">
          <span className="cf-icon">⚙️</span>
          <span className="cf-icon">📷</span>
          <span className="cf-icon">🔗</span>
        </div>
      </div>
    </div>
  );
}
