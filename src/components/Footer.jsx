import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons
import '../styles/Footer.css'; // Ensure you have this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <span>Find me in:</span>
        <a href="https://www.linkedin.com/in/kaushik-acharya-8611a5228/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/KaushikAc1" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
      <div className="username">
        <span>@AlwySavageLT</span>
        <a href="https://github.com/AlwySavageLT" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
