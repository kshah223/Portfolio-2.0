import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Projects.css'; // Make sure the stylesheet is correctly linked

const Projects = () => {
  const projects = [
    {
      name: "GamersHUB - E-Commerce Platform",
      duration: "~100 hours",
      description: [
        "Developed a full-stack e-commerce platform for gaming products using the MERN stack. Implemented user authentication, product catalog, shopping cart, real-time inventory management, and a review system. Integrated secure payment processing and deployed on AWS with CI/CD pipelines, achieving a 30% increase in average session duration during testing."
      ],
      githubLink: "https://github.com/yourusername/ecommerce-project"
    },
    {
      name: "AI-based Image Classification and Puzzle Solver",
      duration: "~80 hours",
      description: [
        "Developed a CNN-based YouTube thumbnail classifier with 81% accuracy using SIFT and TensorFlow. Implemented a 15-puzzle solver using heuristic functions, reducing solution time by 40%. Created an interactive visualization tool for algorithm understanding, enhancing learning experience for 500+ users and demonstrating proficiency in AI and machine learning techniques."
      ],
      githubLink: "https://github.com/yourusername/image-classification-project"
    },
    // {
    //   name: "Connect Four Game (Java, JavaFX)",
    //   duration: "~60 hours",
    //   description: [
    //     "Built full-stack game with custom GUI, game logic, AI opponent, and move reversal feature",
    //     "Utilized Maven for project management and JUnit for comprehensive unit testing",
    //     "Integrated Minimax algorithm for AI opponent, enhancing game difficulty and user engagement"
    //   ],
    //   githubLink: "https://github.com/yourusername/connect-four-java"
    // }
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
