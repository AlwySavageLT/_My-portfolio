import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import image1 from '../assets/Test1.gif'
import image2 from '../assets/Test2.gif'
import image3 from '../assets/Test3.webp'
import image4 from '../assets/Test4.webp'

const Projects = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState(['React', 'Vue']);
  const [isAnimating, setIsAnimating] = useState(false);

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
      image: image1,
      tech: 'React',
      githubUrl: 'https://github.com/yourusername/ui-animations'
    },
    {
      id: 2,
      title: 'Project 2 // My_portfolio',
      description: 'React portfolio application built using vite.js',
      image: image2,
      tech: 'React',
      githubUrl: 'https://github.com/yourusername/my-portfolio'
    },
    {
      id: 3,
      title: 'Project 3 // _ethereum',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      image: image3,
      tech: 'Flutter',
      githubUrl: 'https://github.com/yourusername/ethereum-project'
    },
    {
      id: 4,
      title: 'Project 4 // _ethereum',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      image: image4,
      tech: 'Flutter',
      githubUrl: 'https://github.com/yourusername/ethereum-project-2'
    },
    {
      id: 5,
      title: 'Project 5 // _ethereum',
      description: 'Duis aute irure dolor in velit esse cillum dolore.',
      image: image4,
      tech: 'Angular',
      githubUrl: 'https://github.com/yourusername/ethereum-project-2'
    },
  ];

  const toggleTechnology = (tech) => {
    setSelectedTechnologies(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
    setIsAnimating(true);
  };

  const navigateToGithub = (url) => {
    window.open(url, '_blank');
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [selectedTechnologies]);

  return (
    <div className="projects-page">
      <div className="content-wrapper">
        <aside className="sidebar">
          <div className="technologies-filter">
            <h3>&lt;Technologies/&gt;</h3>
            <ul>
              {technologies.map(tech => (
                <li 
                  key={tech.name}
                  className={selectedTechnologies.includes(tech.name) ? 'active' : ''}
                  onClick={() => toggleTechnology(tech.name)}
                >
                  <span className="tech-icon">{tech.icon}</span>
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <main className="main-content">
          <div className={`projects-grid ${isAnimating ? 'animating' : ''}`}>
            {projects.filter(project => selectedTechnologies.includes(project.tech)).map(project => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button 
                  className="view-project" 
                  onClick={() => navigateToGithub(project.githubUrl)}
                >
                  view-project
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;