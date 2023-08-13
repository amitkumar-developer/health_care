// MedicationTimer.js
import React, { useState, useEffect } from 'react';
import './MedicationTimer.css';

function MedicationTimer() {
  const [medicationName, setMedicationName] = useState('');
  const [medicationTime, setMedicationTime] = useState('');
  const [remainingTime, setRemainingTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval;

    if (timerActive && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0 && timerActive) {
      clearInterval(interval);
      alert(`Time to take your medication: ${medicationName}`);
      setTimerActive(false);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerActive, remainingTime, medicationName]);

  const startTimer = () => {
    if (medicationTime) {
      const currentTime = new Date();
      const selectedTime = new Date(currentTime.toDateString() + ' ' + medicationTime);

      const timeDifference = Math.max(selectedTime - currentTime, 0);
      setRemainingTime(Math.floor(timeDifference / 1000));
      setTimerActive(true);
    }
  };

  const stopTimer = () => {
    setTimerActive(false);
    setRemainingTime(0);
  };

  return (
    <div className="medication-timer">
      <h2>Medication Timer</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="Medication Name"
          value={medicationName}
          onChange={(e) => setMedicationName(e.target.value)}
        />
        <input
          type="time"
          placeholder="Time"
          value={medicationTime}
          onChange={(e) => setMedicationTime(e.target.value)}
        />
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
      </div>
      {timerActive && (
        <div className="timer">
          <p>Time Remaining: {Math.floor(remainingTime / 60)}:{remainingTime % 60}</p>
        </div>
      )}
    </div>
  );
}

export default MedicationTimer;
