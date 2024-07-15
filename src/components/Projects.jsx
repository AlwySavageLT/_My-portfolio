import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ProjectsPage.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <main className="main-content">
          <aside className="sidebar">
            <ul>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Java</li>
              <li>Angular</li>
              <li>Python</li>
              <li>Flutter</li>
            </ul>
          </aside>
          <section className="projects">
            <div className="project-card">
              <h3>Project 1 // _ui-animations</h3>
              <img src="image1.png" alt="Project 1" />
              <p>Duis aute irure dolor in velit esse cillum dolore.</p>
              <button>view-project</button>
            </div>
            <div className="project-card">
              <h3>Project 2 // _tetris-game</h3>
              <img src="image2.png" alt="Project 2" />
              <p>Duis aute irure dolor in velit esse cillum dolore.</p>
              <button>view-project</button>
            </div>
            <div className="project-card">
              <h3>Project 3 // _ethereum</h3>
              <img src="image3.png" alt="Project 3" />
              <p>Duis aute irure dolor in velit esse cillum dolore.</p>
              <button>view-project</button>
            </div>
          </section>
  
      </main>
    </div>
  );
};

export default Projects;
