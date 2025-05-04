
import React from 'react';
import '../styles/Projects.css';  // Projects section styles

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Project 1</h3>
          <p>A web app built with React</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>A mobile app using React Native</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

export default Projects;
