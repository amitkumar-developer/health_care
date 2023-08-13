// ExerciseTimer.js
import React, { useState, useEffect } from 'react';
import './ExerciseTimer.css';

function ExerciseTimer() {
  const [exercise, setExercise] = useState('');
  const [exerciseTime, setExerciseTime] = useState(30);
  const [timerActive, setTimerActive] = useState(false);

  const exercisesForSeniors = [
    'Walking in place',
    'Chair squats',
    'Arm circles',
    'Leg lifts',
    'Seated marching',
    'Shoulder stretches',
    'Toe taps',
  ];

  const startTimer = () => {
    setExerciseTime(30);
    setTimerActive(true);
    setExercise(exercisesForSeniors[Math.floor(Math.random() * exercisesForSeniors.length)]);
  };

  useEffect(() => {
    let interval;

    if (timerActive && exerciseTime > 0) {
      interval = setInterval(() => {
        setExerciseTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setTimerActive(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerActive, exerciseTime]);

  return (
    <div className="exercise-timer">
      <h2>Exercise Timer (for 65+ age)</h2>
      <div className="exercise-info">
        {timerActive ? (
          <div>
            <p>Exercise: {exercise}</p>
            <p>Time Left: {exerciseTime} seconds</p>
          </div>
        ) : (
          <p>Click "Start Exercise" to begin</p>
        )}
      </div>
      <button onClick={startTimer} disabled={timerActive}>
        Start Exercise
      </button>
    </div>
  );
}

export default ExerciseTimer;
