import React, { useState } from 'react';

function EntryForm({ addEntry }) {
  const [type, setType] = useState('income');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = {
      id: new Date().getTime(),
      type,
      description,
      amount: parseFloat(amount),
    };
    addEntry(entry);
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Type: </label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div>
        <label>Description: </label>
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Amount: </label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default EntryForm;
