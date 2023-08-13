// FoodChart.js
import React, { useState } from 'react';
import './FoodChart.css';

function FoodChart() {
  const [selectedCategory, setSelectedCategory] = useState('fruits');
  const [foodItems, setFoodItems] = useState({
    fruits: ['Apple', 'Banana', 'Orange'],
    vegetables: ['Carrot', 'Broccoli', 'Spinach'],
    proteins: ['Chicken', 'Fish', 'Beans'],
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="food-chart">
      <h2>Healthy Food Chart</h2>
      <div className="categories">
        {Object.keys(foodItems).map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="food-list">
        {foodItems[selectedCategory].map((food, index) => (
          <div key={index} className="food-item">
            {food}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodChart;
