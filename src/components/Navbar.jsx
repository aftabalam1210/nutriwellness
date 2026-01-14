import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        <a href="#" className="navbar__logo">
          <div className="navbar__logo-icon-wrapper">
             <Leaf className="navbar__logo-icon" size={24} />
          </div>
          <span className="navbar__logo-text">Nutri<span className="highlight">Wellness</span></span>
        </a>
        
        <button className="navbar__toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`navbar__menu-wrapper ${isOpen ? 'active' : ''}`}>
          <ul className="navbar__menu">
            <li onClick={() => setIsOpen(false)}><a href="#home">Home</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#about">About</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#pricing">Plans</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#recipes">Recipes</a></li>
            <li onClick={() => setIsOpen(false)}><a href="#bmi">BMI Check</a></li>
            <li onClick={() => setIsOpen(false)}>
              <a href="#contact" className="btn btn-primary navbar__cta">Book Consultation</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
