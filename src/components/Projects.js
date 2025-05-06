
import React from 'react';
import '../styles/Projects.css';  // Projects section styles



const PortfolioPage = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-left">
        <p className="portfolio-subtitle">— Portfolio</p>
        <h1 className="portfolio-title">All Creative Works,<br />Selected projects.</h1>
        <p className="portfolio-desc">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
        </p>
        <a href="#" className="portfolio-link">
          Explore more <span>→</span>
        </a>
      </div>

      <div className="portfolio-right">
        <div className="image-wrapper top-right">
          <img src="https://via.placeholder.com/330x250?text=BeServer" alt="BeServer" />
          <div className="img-label">
            <p className="img-title">BeServer.</p>
            <p className="img-sub">Branding, Product</p>
          </div>
        </div>

        <div className="image-wrapper middle-left">
          <img src="https://via.placeholder.com/330x250?text=Seone" alt="Seone" />
          <div className="img-label">
            <p className="img-title">Seone.</p>
            <p className="img-sub">Product, Development</p>
          </div>
        </div>

        <div className="image-wrapper bottom-right">
          <img src="https://via.placeholder.com/330x250?text=Energetic+Tumbler" alt="Energetic Tumbler" />
          <div className="img-label">
            <p className="img-title">Energetic Tumbler.</p>
            <p className="img-sub">Product, Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
