import React from 'react';
import '../styles/Hero.css';
import Profileimg from '../assests/profileimage.png';
import Taskitimg from '../assests/taskitlogo.png';
import { FaInstagram, FaLinkedinIn, FaDribbble } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-top">
        {/* Left Side */}
        <div className="hero-left">
          <motion.div
            className="hero-logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={Taskitimg} alt="Logo" />
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Sanjit<br />Sri ram<span className="dot">.</span>
          </motion.h1>

          <motion.div
            className="yellow-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />

          <motion.div
            className="social-icons"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            {[FaDribbble, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <motion.div
                key={i}
                className="icon-wrapper"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.3 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <Icon />
              </motion.div>
            ))}
          </motion.div>

          <motion.img
            src={Profileimg}
            alt="Sanjit Sri ram"
            className="hero-image"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </div>

        {/* Right Side */}
        <motion.div
          className="hero-right"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <nav className="nav-menu">
            <span className="active">Services</span>
            <span>Works</span>
            <span>Blog</span>
          </nav>

          <div className="intro-section">
            <p className="intro-heading">— Introduction</p>
            <h2 className="intro-title">
              Product Designer and Developer, based in TamilNadu.
            </h2>
            <p className="intro-desc">
              A dedicated software developer with a passion for creating innovative
              solutions and continuously enhancing skills.
            </p>
            <a href="#" className="my-story">My story →</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
