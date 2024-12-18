import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function ChartComponent({ entries }) {
  const months = Array.from({ length: 12 }, (_, index) => new Date(0, index).toLocaleString('default', { month: 'short' }));
  
  const getMonthlyData = (type) => {
    const data = new Array(12).fill(0);
    entries.forEach(entry => {
      const month = new Date(entry.id).getMonth(); // Using entry ID as a timestamp
      if (entry.type === type) {
        data[month] += entry.amount;
      }
    });
    return data;
  };

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Income',
        data: getMonthlyData('income'),
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        fill: true,
      },
      {
        label: 'Expense',
        data: getMonthlyData('expense'),
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Monthly Trends</h2>
      <Line data={data} />
    </div>
  );
}

export default ChartComponent;
