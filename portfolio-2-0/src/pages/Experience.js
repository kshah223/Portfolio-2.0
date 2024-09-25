import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <h2>Professional Experience</h2>
      <div className="job">
        <div className="job-header">
          <h3>Software Engineering Fellow - Headstarter, Remote</h3>
          <p className="duration">June 2024 - September 2024</p>
        </div>
        <ul>
          <li>Engineered an AI-powered chatbot using Python, React.js, and Node.js, increasing user engagement by 15% and improving average session duration by 10% across the platform.</li>
          <li>Developed full-stack applications integrating machine learning models, enhancing overall platform functionality and user experience while optimizing data processing capabilities.</li>
          <li>Led weekly hackathons applying agile methodologies, delivering 3 MVPs addressing real-world problems in healthcare, finance, and education sectors.</li>
        </ul>
      </div>
      <div className="job">
        <div className="job-header">
          <h3>Full Stack Software Engineering Intern - IT Expert Systems, Schaumburg</h3>
          <p className="duration">May 2023 - August 2023</p>
        </div>
        <ul>
          <li>Spearheaded website modernization using React.js, Node.js, and Python, reducing page load times by 20% and improving overall user experience across devices.</li>
          <li>Implemented an AI-powered customer support system with NLP, improving first-response time for queries by 30% and increasing satisfaction scores by 25%.</li>
          <li>Optimized backend operations and database queries, resulting in a 25% enhancement in system performance and stability under increased user load.</li>
        </ul>
      </div>
      <div className="job">
        <div className="job-header">
          <h3>Game Developer Intern - ID Tech Camps, Chicago</h3>
          <p className="duration">May 2022 - December 2022</p>
        </div>
        <ul>
          <li>Developed mods and plugins for Minecraft (Java) and Roblox (Lua), implementing advanced gameplay mechanics for 5000+ concurrent players.</li>
          <li>Implemented cross-platform features and optimized game performance, achieving 15% improvement in efficiency across multiple gaming environments.</li>
          <li>Mentored junior developers in Java and Lua, conducting code reviews and workshops, improving team productivity by 20% over the internship period.</li>
        </ul>
      </div>
      <div className="job">
        <div className="job-header">
          <h3>Teaching Assistant for CS 211: Programming Practicum - UIC, Chicago</h3>
          <p className="duration">August 2021 - December 2023</p>
        </div>
        <ul>
          <li>Facilitated learning of advanced C++ programming concepts for over 250 students, contributing to a 10% improvement in overall class performance.</li>
          <li>Designed and conducted hands-on lab sessions focusing on critical topics such as pointers, memory management, and object-oriented programming.</li>
          <li>Collaborated on course material development and grading processes, streamlining feedback delivery and reducing grading turn around time by 25%.</li>
        </ul>
      </div>
      <div className="job">
        <div className="job-header">
          <h3>Software Engineering Co-op - Hindustan Coca Cola Beverages PVT. LTD., India</h3>
          <p className="duration">June 2018 - July 2019</p>
        </div>
        <ul>
          <li>Developed a supply chain management system using Java and SQL, optimizing inventory tracking for 100+ distribution centers and reducing overstock by 15%.</li>
          <li>Implemented data visualization features with D3.js and React, creating interactive dashboards that improved decision-making for regional managers.</li>
          <li>Participated in Agile practices, daily stand-ups and bi-weekly sprints, contributing to timely delivery of project milestones.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
