"use client";
import React from 'react';

import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    
    <motion.nav
     initial={{ opacity: 0, y: -200 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: 'spring', stiffness: 50, delay: 0.1 }}
     className="navbar">
      <a href="/" className="nav-logo">NewsLinks</a>
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li className="nav-item">
          <a href="/#home" className="nav-link" onClick={closeMenu}>Home</a>
        </li>
        <li className="nav-item">
          <a href="/#about" className="nav-link" onClick={closeMenu}>About</a>
        </li>
        <li className="nav-item">
          <a href="/#features" className="nav-link" onClick={closeMenu}>Features</a>
        </li>
      </ul>
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </motion.nav>
  );
}
