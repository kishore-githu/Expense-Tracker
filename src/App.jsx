import React, { useState } from 'react';
import './App.css';
import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';
import ChartComponent from './components/Chart';

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const editEntry = (id, updatedEntry) => {
    setEntries(entries.map(entry => (entry.id === id ? { ...entry, ...updatedEntry } : entry)));
  };

  const getIncome = () => {
    return entries.filter(entry => entry.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  };

  const getExpenses = () => {
    return entries.filter(entry => entry.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
  };

  const getBalance = () => {
    return getIncome() - getExpenses();
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <EntryForm addEntry={addEntry} />
      <EntryList entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} />
      <div className="summary">
        <h2>Summary</h2>
        <p>Total Income: ${getIncome()}</p>
        <p>Total Expenses: ${getExpenses()}</p>
        <p>Balance: ${getBalance()}</p>
      </div>
      <ChartComponent entries={entries} />
    </div>
  );
}

export default App;
