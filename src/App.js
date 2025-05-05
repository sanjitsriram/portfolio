import React from 'react';
import Hero from './components/Hero';
import Contact from './components/Contact'; // Import Contact component

function App() {
  return (
    <div className="App">
      <Hero />
      <Contact /> {/* Add Contact component after Hero */}
    </div>
  );
}

export default App;
