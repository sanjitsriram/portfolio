import React from "react";
import "../styles/Contact.css";
import { FaArrowRight, FaCube, FaPaintBrush, FaDesktop } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeSlideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerCards = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {},
};

const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Contact = () => {
  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: false });
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: false });

  return (
    <section className="contact-section">
      {/* First block */}
      <motion.div
        ref={ref1}
        className="contact-container"
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={fadeSlideUp}
      >
        <div className="contact-left">
          <p className="section-label">— Contact</p>
          <h2 className="contact-heading">Any Type Of Query & Discussion.</h2>
          <p className="contact-description">
            Sometimes mistakes happen, but they lead to better understanding.
          </p>
          <a href="mailto:sanjitsriram78@gmail.com" className="contact-email">
            sanjitsriram78@gmail.com <FaArrowRight className="arrow-icon" />
          </a>
        </div>

        <motion.div className="contact-right" variants={fadeSlideUp}>
          <p className="quote">
            You can’t use up creativity, the more you use, more you have in your significant mind.
          </p>
          <p className="quote-sub">
            Great things often begin with small mistakes — they teach us, shape us, and help us grow.
          </p>
          <div className="stats">
            <motion.div className="stat-box" variants={fadeSlideUp}>
              <h1>1</h1>
              <span>Years of Experience.</span>
            </motion.div>
            <motion.div className="stat-box" variants={fadeSlideUp}>
              <h1>10</h1>
              <span>Satisfied Clients.</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Services block */}
      <motion.div
        ref={ref2}
        className="services-grid"
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={staggerCards}
      >
        {[
          { icon: <FaCube />, title: "Built Applications.", projects: "5 Projects", highlighted: true },
          { icon: <FaPaintBrush />, title: "Branding Designer.", projects: "2 Projects" },
          { icon: <FaDesktop />, title: "Full Stack Developer.", projects: "6 Projects" },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            className={`service-card ${card.highlighted ? "highlighted" : ""}`}
            variants={cardAnimation}
          >
            <div className="top-half">
              {card.icon}
              <h3>{card.title}</h3>
            </div>
            <div className="bottom-half">
              <p>{card.projects}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
