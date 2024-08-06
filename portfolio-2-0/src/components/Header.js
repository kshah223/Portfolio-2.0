import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import the CSS for styling

const Header = () => {
  return (
    <header className="styled-header">
      <nav className="nav">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Kalpkumar Shah Logo" className="logo-image" /> {/* Adjust path as needed */}
          <span className="logo-name">Kalpkumar Shah</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/experience" className="nav-link">Experience</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/education" className="nav-link">Education</Link>
          <Link to="/certifications" className="nav-link">Certifications</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
