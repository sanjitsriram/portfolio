import React from 'react';
import '../styles/Projects.css';

const PortfolioPage = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-left">
        <p className="portfolio-subtitle">— Portfolio</p>
        <h1 className="portfolio-title">
          All Creative Works,<br />Selected projects.
        </h1>
        <p className="portfolio-desc">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
        </p>
        <a href="#" className="portfolio-link">
          Explore more <span>→</span>
        </a>

        <div className="portfolio-image-wrapper portfolio-left-image">
          <img src="https://via.placeholder.com/330x250?text=Seone" alt="Seone" />
          <div className="portfolio-img-label">
            <p className="portfolio-img-title">Seone.</p>
            <p className="portfolio-img-sub">Product, Development</p>
          </div>
        </div>
      </div>

      <div className="portfolio-right">
        <div className="portfolio-image-wrapper portfolio-top-right-image">
          <img src="https://via.placeholder.com/330x250?text=BeServer" alt="BeServer" />
          <div className="portfolio-img-label">
            <p className="portfolio-img-title">BeServer.</p>
            <p className="portfolio-img-sub">Branding, Product</p>
          </div>
        </div>

        <div className="portfolio-image-wrapper portfolio-bottom-right-image">
          <img src="https://via.placeholder.com/330x250?text=Energetic+Tumbler" alt="Energetic Tumbler" />
          <div className="portfolio-img-label">
            <p className="portfolio-img-title">Energetic Tumbler.</p>
            <p className="portfolio-img-sub">Product, Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
