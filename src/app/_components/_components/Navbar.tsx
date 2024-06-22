"use client"
import React from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          NewsLinks {/* Replace with your logo image/text */}
        </a>

        {/* Mobile menu toggle button */}
        <button className="nav-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i> {/* Font Awesome icon */}
        </button>

        {/* Navigation links (desktop view) */}
        <ul className={`nav-menu`}>
          <li className="nav-item">
            <a href="/" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#features" className="nav-links">
              Features
            </a>
          </li>
          {/* <li className="nav-item">
            <a href="#contact" className="nav-links">
              Contact
            </a>
          </li> */}
        </ul>

        {/* Navigation links (mobile view) */}
        <ul className={`nav-menu mobile`}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#features" className="nav-links" onClick={toggleMenu}>
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
