import React from 'react';
import '../styles/Skills.css'; // Ensure the stylesheet is correctly imported

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <ul>
            <li>JavaScript (ES6+) (3 years)</li>
            <li>Java - Spring & Hibernate (4 years)</li>
            <li>Python - Django & Flask (3 years)</li>
            <li>C/C++ (system programming) (2 years)</li>
            <li>HTML5 & CSS3 (responsive design) (2+ years)</li>
            <li>SQL (complex queries & optimization) (2 years)</li>
            <li>TypeScript (modern front-end frameworks) (1 year)</li>
            <li>F# (functional programming concepts) (1 year)</li>
            <li>Shell scripting (automation & task scheduling) (1 year)</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Technologies & Tools</h3>
          <ul>
            <li>React.js (Hooks, Context) & Redux</li>
            <li>Node.js & Express (REST API development)</li>
            <li>MongoDB (NoSQL database design)</li>
            <li>Django & FastAPI (Python-based web frameworks)</li>
            <li>Angular & TypeScript (enterprise-level solutions)</li>
            <li>Spring Boot (Microservices with Java)</li>
            <li>Git (version control), Docker (containerization), Kubernetes (orchestration)</li>
            <li>Azure, AWS (cloud infrastructure services)</li>
            <li>Jenkins (CI/CD pipelines), Maven (project management), JUnit (testing)</li>
            <li>Google Colab, Kaggle (data science and ML projects)</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Concepts & Methodologies</h3>
          <ul>
            <li>RESTful API design and implementation</li>
            <li>Microservices architecture</li>
            <li>Continuous Integration & Continuous Deployment (CI/CD)</li>
            <li>Cloud Computing (IaaS, PaaS, SaaS)</li>
            <li>Machine Learning model development</li>
            <li>DevOps practices and tools</li>
            <li>Agile and Scrum methodologies</li>
            <li>Unit testing, TDD and BDD</li>
            <li>Scalable system design</li>
            <li>Security best practices (OWASP, SSL/TLS)</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Effective Communication</li>
            <li>Team Collaboration</li>
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Critical Thinking</li>
            <li>Adaptability</li>
            <li>Project Leadership</li>
            <li>Client Relations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
