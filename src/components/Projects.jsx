import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import image1 from '../assets/Test1.gif'
import image2 from '../assets/Test2.gif'
import image3 from '../assets/Test3.webp'
import image4 from '../assets/Test4.webp'
import ReactI from '../assets/Reacticon.svg'
import HTMLI from '../assets/html_icon.svg'
import CSSI from '../assets/css_icon.svg'
import NextI from '../assets/nextjs_icon.svg'
import ViteI from '../assets/Vite.js.svg'
import PythonI from '../assets/python_icon.svg'
import FlutterI from '../assets/flutter_icon.svg'

const Projects = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState(['React', 'Vue']);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    { name: 'React', icon: ReactI },
    { name: 'HTML', icon: HTMLI },
    { name: 'CSS', icon: CSSI },
    { name: 'Next.js', icon: NextI },
    { name: 'Python', icon: PythonI },
    { name: 'Vite.js', icon: ViteI },
    { name: 'Flutter', icon: FlutterI },
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
      tech: 'Python',
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
                  <img src={tech.icon} alt={tech.name} className="tech-icon" />
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