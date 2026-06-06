import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const toggleDropdown = (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      setDropdownOpen(!dropdownOpen);
    }
  };

  const NavLink = ({ to, children, isExternal = false, isButton = false }) => {
    const isHome = location.pathname === '/';
    const href = isHome ? to : `/${to}`;
    const className = isButton ? 'btn' : '';

    if (isExternal || to.startsWith('http')) {
      return <a href={to} className={className} target="_blank" rel="noopener noreferrer">{children}</a>;
    }

    if (to.startsWith('#')) {
      return <a href={href} className={className} onClick={() => setIsOpen(false)}>{children}</a>;
    }

    return <Link to={to} className={className} onClick={() => setIsOpen(false)}>{children}</Link>;
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        <Link to="/" className="navbar__logo" onClick={handleLogoClick}>
          <div className="navbar__logo-icon-wrapper">
            <Leaf className="navbar__logo-icon" size={24} />
          </div>
          {/* NutriVerse By Shreya */}
          <span className="navbar__logo-text">Nutri<span className="highlight">Verse By Shreya</span></span>
        </Link>

        <button className="navbar__toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`navbar__menu-wrapper ${isOpen ? 'active' : ''}`}>
          <ul className="navbar__menu">
            <li><NavLink to="#home">Home</NavLink></li>
            <li><NavLink to="#about">About</NavLink></li>
            <li><NavLink to="#pricing">Plans</NavLink></li>
            <li><NavLink to="#recipes">Recipes</NavLink></li>
            <li><NavLink to="#bmi">BMI Check</NavLink></li>
            <li><NavLink to="#tdee">TDEE Check</NavLink></li>

            <li className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}
              onMouseEnter={() => window.innerWidth > 900 && setDropdownOpen(true)}
              onMouseLeave={() => window.innerWidth > 900 && setDropdownOpen(false)}>
              <div className="dropdown-trigger" onClick={toggleDropdown}>
                Learn With Me <ChevronDown size={14} className={`chevron ${dropdownOpen ? 'rotated' : ''}`} />
              </div>
              <ul className="dropdown-menu">
                {/* <li><Link to="/recipes">Full Recipes</Link></li> */}
                <li><Link to="/articles">Articles</Link></li>
              </ul>
            </li>

            <li>
              <NavLink to="#contact" isButton>
                <span className="btn btn-primary navbar__cta">Book Consultation</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
