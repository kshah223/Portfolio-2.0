import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <h2>Professional Experience</h2>
      <div className="job">
        <div className="job-header">
          <h3>AI Trainer for Marketing - Outlier AI</h3>
          <p className="duration">December 2023 - February 2024</p>
        </div>
        <ul>
          <li>Designed and conducted training sessions on AI tools tailored for marketing strategies.</li>
          <li>Enhanced the marketing team's ability to leverage AI-driven analytics for targeted campaigns.</li>
          <li>Developed custom AI models to predict consumer behavior, increasing campaign effectiveness by 25%.</li>
          <li>Facilitated cross-departmental understanding of AI capabilities, fostering innovation in product development and customer engagement.</li>
        </ul>
      </div>
      <div className="job">
        <div className="job-header">
          <h3>Teaching Assistant - University of Illinois, Chicago</h3>
          <p className="duration">August 2021 - December 2023</p>
        </div>
        <ul>
          <li>Provided academic support to 250+ students in computer science, mathematics, and engineering</li>
          <li>Conducted lab sessions, graded assignments, and held office hours to clarify complex concepts</li>
          <li>Assisted in developing course materials and creating hands-on projects, improving student performance by 15%</li>
        </ul>
      </div>
      <div className="job">
        <div className="job-header">
          <h3>Cloud Analyst Intern - IT Expert System, INC.</h3>
          <p className="duration">June 2023 - August 2023</p>
        </div>
        <ul>
          <li>Optimized Azure cloud infrastructure, reducing costs by 5% and improving performance by 20%</li>
          <li>Led cross-functional teams in cloud migration projects, increasing operational efficiency by 15%</li>
          <li>Implemented security measures ensuring 100% compliance with industry standards and regulations</li>
          <li>Automated deployment processes using Jenkins and Docker, reducing deployment time by 20%</li>
        </ul>
      </div>
      <div className="job">
        <div className="job-header">
          <h3>Game Development Instructor - ID Tech Camp</h3>
          <p className="duration">May 2022 - December 2022</p>
        </div>
        <ul>
          <li>Developed and delivered game development curriculum for students aged 7-19, achieving 95% satisfaction rate</li>
          <li>Mentored 50+ students in Java-based Minecraft modding, fostering coding and design skills</li>
          <li>Guided students in debugging and optimizing their code, improving problem-solving skills by 30%</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
