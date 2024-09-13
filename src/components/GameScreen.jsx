/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const getRandomValue = () => Math.floor(Math.random() * 20) + 1;

const GameScreen = ({ mode, setScreen }) => {
  const [currentNumber, setCurrentNumber] = useState(1000);
  const [subtractValue, setSubtractValue] = useState(mode === 'normal' ? 7 : getRandomValue());
  const [time, setTime] = useState(15);
  const [answer, setAnswer] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(null);

  useEffect(() => {
    if (!gameOver && time === 0) {
      setGameOver(true);
      setWin(false);
    }
    
    if (!gameOver) {
      const timer = setTimeout(() => setTime((prev) => (prev > 0 ? prev - 1 : prev)), 1000);
      return () => clearTimeout(timer);
    }
  }, [time, gameOver]);

  const checkAnswer = () => {
    if (parseInt(answer) === currentNumber - subtractValue) {
      setCurrentNumber(currentNumber - subtractValue);
      setTime(15);
      setAnswer('');
      if (currentNumber <= subtractValue) {
        setGameOver(true);
        setWin(true);
      } else {
        if (mode === 'random') setSubtractValue(getRandomValue());
      }
    } else {
      setGameOver(true);
      setWin(false);
    }
  };

  return !gameOver ? (
    <div className="game-screen">
      <div className="timer">
        Time: <span>{time}</span>
      </div>
      <div className="numbers-group">
        <div className="number-display">{currentNumber}</div>
        <div className="current-minus">- {subtractValue}</div>
        <h1>=</h1>
        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <button onClick={checkAnswer}>Submit</button>
    </div>
  ) : (
    <div className="game-over-screen">
      <div className="result-box">
        {win ? <h2>You Win!</h2> : <h2>Game Over!</h2>}
        <button onClick={() => setScreen('modeSelect')}>Play Again</button>
      </div>
    </div>
  );
};

export default GameScreen;
