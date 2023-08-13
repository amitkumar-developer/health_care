// BrainExerciseGame.js
import React, { useState, useEffect } from 'react';
import './BrainExerciseGame.css';

function BrainExerciseGame() {
  const [question, setQuestion] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const generateRandomQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setQuestion(`${num1} + ${num2}`);
  };

  useEffect(() => {
    generateRandomQuestion();
  }, []);

  const checkAnswer = () => {
    const [num1, , num2] = question.split(' ');
    const correctAnswer = parseInt(num1) + parseInt(num2);

    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1);
    } else {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
    }

    generateRandomQuestion();
    setUserAnswer('');
  };

  return (
    <div className="brain-exercise-game">
      <h2>Brain Exercise Game</h2>
      <div className="question">{question}</div>
      <input
        type="number"
        placeholder="Your Answer"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Submit</button>
      <div className="score">Score: {score}</div>
      <div className="high-score">High Score: {highScore}</div>
    </div>
  );
}

export default BrainExerciseGame;
