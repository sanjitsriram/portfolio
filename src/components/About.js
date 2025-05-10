import React from "react";
import "../styles/About.css";

const BlogTestimonial = () => {
  return (
    <div className="bt-wrapper">
      <section className="bt-blog-section">
        <div className="bt-blog-left">
          <p className="bt-blog-label">— Blog</p>
          <h1 className="bt-blog-heading">
            What's new?<br />My blog and news.
          </h1>
        </div>
        <div className="bt-blog-right">
          <div className="bt-blog-entry">
            <div>
              <p className="bt-blog-date">Feb 26 · Blog</p>
              <p className="bt-blog-title">Let this be a lesson to you</p>
            </div>
            <span className="bt-arrow">→</span>
          </div>
          <div className="bt-blog-entry">
            <div>
              <p className="bt-blog-date">Feb 14 · Blog</p>
              <p className="bt-blog-title">How do you use time tracking for projects?</p>
            </div>
            <span className="bt-arrow">→</span>
          </div>
          <div className="bt-blog-entry">
            <div>
              <p className="bt-blog-date">Feb 9 · Blog</p>
              <p className="bt-blog-title">Ego and empathy in design</p>
            </div>
            <span className="bt-arrow">→</span>
          </div>
        </div>
      </section>

      <section className="bt-testimonial-section">
        <div className="bt-image-wrapper">
          <img
            src="https://via.placeholder.com/240x300.png?text=Placeholder"
            alt="Testimonial"
            className="bt-testimonial-img"
          />
        </div>
        <div className="bt-testimonial-text">
          <div className="bt-quote-wrapper">
            <span className="bt-quote-symbol">“</span>
            <p className="bt-testimonial-content">
              Don’t give someone hope by promising help you can’t give. It’s better to be honest about what you can do, rather than raise expectations you might not be able to meet.
            </p>
          </div>
          <p className="bt-testimonial-author">Sanjit Sriram</p>
          <p className="bt-testimonial-position">CEO of Taskiit</p>
          <div className="bt-pagination-dots">
            <span className="bt-dot bt-dot-active"></span>
            <span className="bt-dot"></span>
            <span className="bt-dot"></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogTestimonial;
