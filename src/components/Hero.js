import '../styles/Hero.css';
import React from 'react';
import Profileimg from '../assests/profileimage.png';
import { FaInstagram, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-top">
        <div className="hero-left">
          <div className="hero-logo">D</div>
          <h1 className="hero-name">
            Sanjit<br />Sri ram<span className="dot">.</span>
          </h1>
          <div className="yellow-line"></div>
          <div className="social-icons">
            <FaDribbble />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
          <img src={Profileimg} alt="Sanjit Sri ram" className="hero-image" />
        </div>
        <div className="hero-right">
          <nav className="nav-menu">
            <span className="active">Services</span>
            <span>Works</span>
            <span>Blog</span>
          </nav>
          <div className="intro-section">
            <p className="intro-heading">— Introduction</p>
            <h2 className="intro-title">Product Designer and Developer, based in TamilNadu.</h2>
            <p className="intro-desc">
            A dedicated software developer with a passion for creating innovative
            solutions and continuously enhancing skills.

            </p>
            <a href="#" className="my-story">My story →</a>
          </div>
        </div>
      </div>

      {/* <div className="hero-bottom">
        <div className="contact-block">
          <p className="contact-title">— Contact</p>
          <p className="contact-desc">Any Type Of Query & Discussion.</p>
        </div>
        <div className="quote-block">
          You can’t use up creativity,<br />
          the more you use, more you have<br />
          in your significant mind.
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
