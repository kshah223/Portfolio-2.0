import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className='grad'>
        <div className='university'>
          <h3>Georgia Institute of Technology (GATech) | Atlanta, Georgia</h3>
        </div>
        <p>M.S in Computer Science</p>
        <p>2025 - 2026 (Expected)</p>
        <p>GPA: --/4.0 (In Progress)</p>
        <p><strong>Relevant Courses: </strong>TBD</p>
      </div>
      <div className='undergrad'>
        <div className='university'>
          <h3>University of Illinois at Chicago (UIC) | Chicago, Illinois</h3>
        </div>
        <p>B.S in Computer Science with Minor in Mathematics</p>
        <p>2020 - 2023</p>
        <p>Cumulative GPA: 3.74/4.0</p>
        <p><strong>Honors: </strong>Honors College (Aug 2020 - Spring 2022), Dean's List (Fall 2022, Spring 2022, Fall 2023)</p>
        <p><strong>Relevant Courses: </strong>Data Structures, Algorithms, System Programming, Database Systems, Artificial Intelligence, Web Development</p>
      </div>
    </section>
  );
};

export default Education;
