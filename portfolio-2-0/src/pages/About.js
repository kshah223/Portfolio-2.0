import React from 'react';
import '../styles/About.css'; // This will import your About page specific styles

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am a passionate software engineer with a strong foundation in full-stack development,
          cloud computing, and machine learning. With a proven track record in various programming languages
          and technologies, I thrive on tackling complex challenges and crafting efficient, scalable solutions.
        </p>
        <p>
          My technical journey began at the University of Illinois, Chicago, where I earned my
          Bachelor's degree in Computer Science with a minor in Mathematics. Since graduating, I have
          engaged in several ambitious projects ranging from developing robust e-commerce platforms to
          implementing AI-driven image classification systems. These experiences have not only sharpened
          my technical skills but also fueled my passion for continuous learning and improvement.
        </p>
        <p>
          Currently, I am actively seeking opportunities to start my career as a software engineer. I am eager
          to apply my skills in a dynamic company that values innovation and a forward-thinking approach. My goal
          is to contribute positively to challenging projects, learn from seasoned professionals, and grow within
          an organization that champions technological advancement and high-quality engineering.
        </p>
        <p>
          I am particularly interested in roles that allow me to solve real-world problems through programming and
          technology. With a keen interest in the future of AI and cloud technologies, I am excited about the
          prospect of contributing to industry-leading projects that push the boundaries of what is possible.
        </p>
        <p>
          If you are looking for a dedicated, results-oriented software engineer who is ready to make an immediate
          impact, please feel free to contact me. I am available for interviews at your earliest convenience and can
          start immediately, eager to bring my background in software development and innovative problem-solving skills
          to your team.
        </p>
        <div className="resume-download">
          <a href={`${process.env.PUBLIC_URL}/Kalpkumar_Shah_Resume.pdf`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>

      </div>
    </div>
  );
};

export default About;
