// MedicalListForm.js
import React, { useState } from 'react';
import './MedicalListForm.css';

function MedicalListForm() {
  const [medicalItems, setMedicalItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleAddItem = () => {
    if (itemName && itemDescription) {
      const newItem = {
        name: itemName,
        description: itemDescription,
      };

      setMedicalItems([...medicalItems, newItem]);
      setItemName('');
      setItemDescription('');
    }
  };

  return (
    <div className="medical-list-form">
      <h2>Medical List</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Item Description"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div className="item-list">
        {medicalItems.map((item, index) => (
          <div key={index} className="item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MedicalListForm;
