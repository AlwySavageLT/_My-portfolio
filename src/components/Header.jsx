import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <nav className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <span className="name">kaushik-v-acharya</span>
        <button className="nav-toggle" onClick={toggleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/" onClick={toggleNav}>_hello</Link>
          </li>
          <li className={location.pathname === '/about-me' ? 'active' : ''}>
            <Link to="/about-me" onClick={toggleNav}>_about-me</Link>
          </li>
          <li className={location.pathname === '/projects' ? 'active' : ''}>
            <Link to="/projects" onClick={toggleNav}>_projects</Link>
          </li>
          <li className={location.pathname === '/contact-me' ? 'active' : ''}>
            <Link to="/contact-me" onClick={toggleNav}>_contact-me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;