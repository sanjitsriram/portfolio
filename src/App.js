import React from 'react';
import Hero from './components/Hero';
import Contact from './components/Contact'; // Import Contact component
import PortfolioPage from './components/Projects';
import BlogTestimonial from './components/About';
import ContactForm from './components/Skills';

function App() {
  return (
    <div className="App">
      <Hero />
      <Contact /> {/* Add Contact component after Hero */}
      <PortfolioPage /> {/* Add PortfolioPage component after Contact */}
      {/* You can add more components here as needed */}
      <BlogTestimonial />
      <ContactForm /> {/* Add ContactForm component after BlogTestimonial */}
    </div>
  );
}

export default App;
