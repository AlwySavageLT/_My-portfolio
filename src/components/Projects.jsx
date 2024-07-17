import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState(['React', 'Vue']);

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Vue', icon: '🖖' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'Gatsby', icon: '🚀' },
    { name: 'Flutter', icon: '📱' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Project 1 // _ui-animations',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      image: 'path_to_ui_animations_image.jpg',
      tech: 'React'
    },
    {
      id: 2,
      title: 'Project 2 // _tetris-game',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      image: 'path_to_tetris_game_image.jpg',
      tech: 'Vue'
    },
    {
      id: 3,
      title: 'Project 3 // _ethereum',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      image: 'path_to_ethereum_image.jpg',
      tech: 'React'
    },
  ];

  const toggleTechnology = (tech) => {
    setSelectedTechnologies(prev => 
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  return (
    <div className="projects-container">
      <div className="sidebar2">
        <h2>projects</h2>
        <div className="tech-filter">
          <p>React; Vue <span className="close-icon">×</span></p>
                  {technologies.map(tech => (
          <label key={tech.name} className="tech-item">
            <input 
              type="checkbox" 
              checked={selectedTechnologies.includes(tech.name)}
              onChange={() => toggleTechnology(tech.name)}
            />
            <span className="tech-icon">{tech.icon}</span>
            <span>{tech.name}</span>
          </label>
        ))}
        </div>
      </div>
      <div className="projects-grid">
        {projects.filter(project => selectedTechnologies.includes(project.tech)).map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button className="view-project">view-project</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;