import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HomePage.css';
import SnakeGame from './SnakeGame';

const HomePage = () => {
  return (
    <div className="home-screen">
      <main className="main-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          transition={{ duration: 3 }}
          className="text-content"
        >
          <h1>Hi all. I am </h1>
          <h2>Kaushik V Acharya</h2>
          <h3>{'> Graduate - Fresher'}</h3>
          <p>// complete the game to continue</p>
          <p>// you can also see it on my GitHub page</p>
          <p>
            const githubLink = <a href='https://github.com/AlwySavageLT' target='_blank' rel='noopener noreferrer'>https://github.com/AlwySavageLT</a>
          </p>
        </motion.div>
        <snake>
        <SnakeGame />
        </snake>
        
      </main>
    </div>
  );
};

export default HomePage;
