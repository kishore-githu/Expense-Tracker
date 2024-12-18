import React, { useState } from 'react';

function EntryList({ entries, deleteEntry, editEntry }) {
  const [isEditing, setIsEditing] = useState(null);
  const [editedDescription, setEditedDescription] = useState('');
  const [editedAmount, setEditedAmount] = useState('');

  const handleEdit = (id) => {
    const entry = entries.find(entry => entry.id === id);
    setIsEditing(id);
    setEditedDescription(entry.description);
    setEditedAmount(entry.amount);
  };

  const handleSaveEdit = (id) => {
    const updatedEntry = {
      description: editedDescription,
      amount: parseFloat(editedAmount),
    };
    editEntry(id, updatedEntry);
    setIsEditing(null);
  };

  return (
    <div>
      <h2>Entries</h2>
      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            {isEditing === entry.id ? (
              <div>
                <input 
                  type="text" 
                  value={editedDescription} 
                  onChange={(e) => setEditedDescription(e.target.value)} 
                />
                <input 
                  type="number" 
                  value={editedAmount} 
                  onChange={(e) => setEditedAmount(e.target.value)} 
                />
                <button onClick={() => handleSaveEdit(entry.id)}>Save</button>
              </div>
            ) : (
              <div>
                <strong>{entry.type === 'income' ? 'Income' : 'Expense'}:</strong> 
                {entry.description} - ${entry.amount}
                <button onClick={() => deleteEntry(entry.id)}>Delete</button>
                <button onClick={() => handleEdit(entry.id)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntryList;
