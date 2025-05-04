
import React from 'react';
import '../styles/Header.css';  // Custom header styles

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Carlos' Portfolio</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
