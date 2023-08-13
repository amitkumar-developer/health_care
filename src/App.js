// App.js
import React from 'react';
import './App.css';
import MedicationTimer from './MedicationTimer';
import ExerciseTimer from './ExerciseTimer';
import FoodChart from './FoodChart';
import MedicalListForm from './MedicalListForm';
 import BrainExerciseGame from './BrainExerciseGame';
import ElderCommunity from './ElderCommunity';


function App() {
  return (
    <div className="app">
      <img src="https://www.kratin.co.in/images/kratin.png" className="App-logo" alt="logo" />
      <h1>Virtual Elderly Care Assistant</h1>
      <div className="features">
        <MedicationTimer />
          <ExerciseTimer /> 
        <FoodChart /> 
        <MedicalListForm />
         <BrainExerciseGame /> 
        <ElderCommunity />
    
      </div>
    </div>
  );
}

export default App;
