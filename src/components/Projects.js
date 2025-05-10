import React from 'react';
import '../styles/Projects.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import vnovelties from '../assests/vnovelties.jpg';
import track1 from '../assests/track2.jpg';
import bingly1 from '../assests/bingly3.jpg';

// Animation variants for scale and fade-in
const fadeScaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.8, 
      ease: 'easeOut', 
      delay: 0.3 
    }
  },
};

const PortfolioPage = () => {
  // Intersection Observer to trigger animation when in view
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div className="portfolio-container">
      {/* Left section with animation */}
      <motion.div
        className="portfolio-left"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeScaleIn}
      >
        <p className="portfolio-subtitle">— Portfolio</p>
        <h1 className="portfolio-title">
          All Creative Works,<br />Selected Projects.
        </h1>
        <p className="portfolio-desc">
          Explore the innovative solutions and creative projects that have shaped our journey.
        </p>
        <a href="#" className="portfolio-link">
          Explore more <span>→</span>
        </a>

        {/* First image with animation */}
        <motion.div className="portfolio-image-wrapper portfolio-left-image" variants={fadeScaleIn}>
          <img src={vnovelties} alt="vnovelties" />
          <div className="portfolio-img-label">
            <p className="portfolio-img-title">VNOVELTIES.</p>
            {/* <p className="portfolio-img-sub">Product, Development</p> */}
          </div>
        </motion.div>
      </motion.div>

      {/* Right section with images */}
      <div className="portfolio-right">
        {/* Second image with animation */}
        <motion.div className="portfolio-image-wrapper portfolio-top-right-image" variants={fadeScaleIn}>
          <img src={track1} alt="track1" />
          <div className="portfolio-img-label">
            <p className="portfolio-img-title">TRACK.</p>
            <p className="portfolio-img-sub"></p>
          </div>
        </motion.div>

        {/* Third image with animation */}
        <motion.div className="portfolio-image-wrapper portfolio-bottom-right-image" variants={fadeScaleIn}>
          <img src={bingly1} alt="bingly1" />
          <div className="portfolio-img-label">
            <p className="portfolio-img-title">BINGLY.</p>
            {/* <p className="portfolio-img-sub">Product, Development</p> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;
