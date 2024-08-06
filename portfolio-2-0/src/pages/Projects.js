import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Projects.css'; // Make sure the stylesheet is correctly linked

const Projects = () => {
  const projects = [
    {
      name: "E-Commerce Platform (MERN Stack)",
      duration: "~100 hours",
      description: [
        "Developed full-stack application with React, Node.js, Express, and MongoDB",
        "Implemented user authentication, shopping cart, product search, admin panel, and payment integration",
        "Deployed application on AWS, implementing CI/CD pipelines for automated testing and deployment"
      ],
      githubLink: "https://github.com/yourusername/ecommerce-project"
    },
    {
      name: "AI-based Image Classification and Puzzle Solver",
      duration: "~80 hours",
      description: [
        "Developed CNN-based YouTube thumbnail classifier with 81% accuracy using SIFT and TensorFlow",
        "Implemented 15-puzzle solver using heuristic functions, reducing solution time by 40%",
        "Created interactive visualization tool, enhancing algorithm understanding for 500+ users"
      ],
      githubLink: "https://github.com/yourusername/image-classification-project"
    },
    {
      name: "Connect Four Game (Java, JavaFX)",
      duration: "~60 hours",
      description: [
        "Built full-stack game with custom GUI, game logic, AI opponent, and move reversal feature",
        "Utilized Maven for project management and JUnit for comprehensive unit testing",
        "Integrated Minimax algorithm for AI opponent, enhancing game difficulty and user engagement"
      ],
      githubLink: "https://github.com/yourusername/connect-four-java"
    }
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <div className="project-header">
            <h3>{project.name} <span className="duration">{project.duration}</span></h3>
          </div>
          <ul>
            {project.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
            <FontAwesomeIcon icon={faGithub} size="2x" /> {/* GitHub icon */}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
