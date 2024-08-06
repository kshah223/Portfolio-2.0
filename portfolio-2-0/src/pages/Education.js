import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className='grad'>
        <div className='university'>
          <h3>University of Illinois, Chicago</h3>
        </div>
        <p>Master of Science in Computer Science</p>
        <p>2024 - 2025 (Expected)</p>
        <p>GPA: --/4.0 (In Progress)</p>
        <p><strong>Relevant Courses:</strong> Advanced Machine Learning, Big Data Analytics, Cloud Computing, Security and Privacy, Advanced Algorithms</p>
      </div>
      <div className='undergrad'>
        <div className='university'>
          <h3>University of Illinois, Chicago</h3>
        </div>
        <p>Bachelor of Science in Computer Science, Minor in Mathematics</p>
        <p>2020 - 2023</p>
        <p>GPA: 3.48/4.0</p>
        <p><strong>Relevant Courses:</strong> Data Structures, Algorithms, System Programming, Database Systems, Artificial Intelligence, Web Development</p>
      </div>
    </section>
  );
};

export default Education;
