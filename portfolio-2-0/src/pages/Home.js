// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // We'll create this file for Home-specific styles

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-text">
          <h1>Hello, I'm <span className="highlight">Kalpkumar Shah</span></h1>
          <h2>Software Engineer & Full-Stack Developer</h2>
          <p>I'm passionate about creating efficient, scalable solutions and constantly learning new technologies.</p>
          <div className="cta-buttons">
            <Link to="/projects" className="btn btn-primary">View My Projects</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
          </div>
        </div>
        <div className="home-image">
          <img src="/profile-pic.jpg" alt="Kalpkumar Shah" />
        </div>
      </div>
    </div>
  );
};

export default Home;