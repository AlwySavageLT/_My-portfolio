import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <h1 className="name">kaushik-v-acharya</h1>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">_hello</Link>
          </li>
          <li className={location.pathname === '/about-me' ? 'active' : ''}>
            <Link to="/about-me">_about-me</Link>
          </li>
          <li className={location.pathname === '/projects' ? 'active' : ''}>
            <Link to="/projects">_projects</Link>
          </li>
          <li className={location.pathname === '/contact-me' ? 'active' : ''}>
            <Link to="/contact-me">_contact-me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;