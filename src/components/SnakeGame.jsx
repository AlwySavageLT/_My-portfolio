import React, { useEffect, useState, useCallback } from 'react';
import '../styles/SnakeGame.css';

const SnakeGame = () => {
  const [snake, setSnake] = useState([
    { x: 100, y: 100 },
    { x: 90, y: 100 },
    { x: 80, y: 100 },
    { x: 70, y: 100 },
    { x: 60, y: 100 }
  ]);
  const [food, setFood] = useState({ x: 60, y: 60 });
  const [direction, setDirection] = useState('RIGHT');
  const [isPlaying, setIsPlaying] = useState(false);
  const [foodLeft, setFoodLeft] = useState(10);
  const [message, setMessage] = useState('');
  const [boardSize, setBoardSize] = useState({ width: 200, height: 400 });

  const moveSnake = useCallback(() => {
    let newSnake = [...snake];
    let head = { ...newSnake[0] };

    switch (direction) {
      case 'UP':
        head.y -= 10;
        break;
      case 'DOWN':
        head.y += 10;
        break;
      case 'LEFT':
        head.x -= 10;
        break;
      case 'RIGHT':
        head.x += 10;
        break;
      default:
        break;
    }

    newSnake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * (boardSize.width / 10)) * 10,
        y: Math.floor(Math.random() * (boardSize.height / 10)) * 10,
      });
      setFoodLeft(foodLeft - 1);
    } else {
      newSnake.pop();
    }

    if (
      head.x < 0 ||
      head.x >= boardSize.width ||
      head.y < 0 ||
      head.y >= boardSize.height ||
      newSnake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ) {
      setMessage('Game Over!');
      setIsPlaying(false);
    } else if (foodLeft === 0) {
      setMessage('Well Done!');
      setIsPlaying(false);
    }

    setSnake(newSnake);
  }, [snake, direction, food, foodLeft, boardSize]);

  const handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 37:
        setDirection('LEFT');
        break;
      case 38:
        setDirection('UP');
        break;
      case 39:
        setDirection('RIGHT');
        break;
      case 40:
        setDirection('DOWN');
        break;
      default:
        break;
    }
  };

  const handleArrowClick = (newDirection) => {
    if (isPlaying) {
      setDirection(newDirection);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(moveSnake, 200);
      return () => clearInterval(interval);
    }
  }, [isPlaying, moveSnake]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const updateBoardSize = () => {
      const gameBoard = document.querySelector('.game-board');
      if (gameBoard) {
        setBoardSize({
          width: gameBoard.offsetWidth,
          height: gameBoard.offsetHeight,
        });
      }
    };

    updateBoardSize();
    window.addEventListener('resize', updateBoardSize);

    return () => window.removeEventListener('resize', updateBoardSize);
  }, []);

  const startGame = () => {
    setSnake([
      { x: 100, y: 100 },
      { x: 90, y: 100 },
      { x: 80, y: 100 },
      { x: 70, y: 100 },
      { x: 60, y: 100 }
    ]);
    setFood({ x: 60, y: 60 });
    setDirection('RIGHT');
    setFoodLeft(10);
    setMessage('');
    setIsPlaying(true);
  };

  const getSegmentStyle = (x, y) => ({
    left: `${(x / boardSize.width) * 100}%`,
    top: `${(y / boardSize.height) * 100}%`,
  });

  return (
    <div className="game-container">
      <div className="game-board">
        {snake.map((segment, index) => (
          <div key={index} className="snake-segment" style={getSegmentStyle(segment.x, segment.y)} />
        ))}
        <div className="food" style={getSegmentStyle(food.x, food.y)} />
      </div>
      <div className="instructions">
        <p>{'// use keyboard'}</p>
        <p>{'// arrows to play'}</p>
        <div className="arrow-keys">
          <div className="arrow-row">
            <div className="arrow-spacer"></div>
            <button className="arrow-key up" onClick={() => handleArrowClick('UP')}>↑</button>
            <div className="arrow-spacer"></div>
          </div>
          <div className="arrow-row">
            <button className="arrow-key left" onClick={() => handleArrowClick('LEFT')}>←</button>
            <button className="arrow-key down" onClick={() => handleArrowClick('DOWN')}>↓</button>
            <button className="arrow-key right" onClick={() => handleArrowClick('RIGHT')}>→</button>
          </div>
        </div>
        <div className="food-left">
          {[...Array(foodLeft)].map((_, index) => (
            <div key={index} className="food-dot" />
          ))}
        </div>
        <p>{'// food left'}</p>
        {message && <p>{message}</p>}
        {!isPlaying && (
          <button onClick={startGame}>{message === 'Game Over!' ? 'Play Again' : 'Start Game'}</button>
        )}
      </div>
    </div>
  );
};

export default SnakeGame;