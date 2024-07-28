import React, { useState, useEffect } from 'react';
import '../styles/AboutMePage.css';
import resumePDF from '../assets/CV_Kaushik.pdf';

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState('Bio');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleViewResume = () => {
    window.open(resumePDF, '_blank');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'CV_Kaushik.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sections = {
    Bio: `
/**
 * About League of Legends Player Life
 * 
 * Five years of pure, unadulterated, edge-of-your-seat action,
 * and, of course, the occasional existential crisis. 
 * 
 * From Bronze to Diamond, every game is a new adventure.
 * Sometimes you're the carry, sometimes you're the ward.
 * 
 * But always, always, you're a legend in the making.
 */
    `,
    Interests: `
/**
 * My Passions & Pursuits
 * 
 * 1. Competitive Gaming: Striving for that Challenger rank
 * 2. Code Crafting: Building digital realms, one line at a time
 * 3. Music Production: Mixing beats that drop harder than Baron
 * 4. AI & Machine Learning: Teaching machines to outplay humans
 * 5. Cybersecurity: Protecting the digital frontier
 */
    `,
    Education: `
/**
 * Learning Path
 * 
 * Degree: B.S. in Computer Science & Game Development
 * University: TechNexus Institute, Class of 2022
 * 
 * Key Modules:
 * - Advanced Algorithms & Data Structures
 * - Game Engine Architecture
 * - Cybersecurity Fundamentals
 * - Full-Stack Web Development
 * 
 * Side Quests:
 * - Hackathons: 5 wins, 3 honorable mentions
 * - Online Courses: 20+ certifications in various tech stacks
 */
    `
  };

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeSection]);

  return (
    <div className="about-me-page">
      <div className="content-wrapper">
        <aside className="sidebar">
          <div className="personal-info">
            <h3>&lt;Personal-info/&gt;</h3>
            <ul>
              {Object.keys(sections).map((section) => (
                <li 
                  key={section}
                  className={activeSection === section ? 'active' : ''}
                  onClick={() => setActiveSection(section)}
                >
                  {section}
                </li>
              ))}
            </ul>
          </div>
          <div className="Resume">
            <h3>&lt;Resume/&gt;</h3>
            <div className="resume-buttons">
              <button className="view-resume" onClick={handleViewResume}>View</button>
              <button className="download-resume" onClick={handleDownloadResume}>Download</button>
            </div>
          </div>
        </aside>
        <main className="main-content">
          <div className={`bio-section ${isAnimating ? 'animating' : ''}`}>
            <pre>
              <code1>{sections[activeSection]}</code1>
            </pre>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutMe;