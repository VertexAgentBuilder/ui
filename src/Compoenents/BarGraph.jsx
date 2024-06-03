import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './BarGraph.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = ({ issueCounts }) => {
  const data = {
    labels: Object.keys(issueCounts),
    datasets: [
      {
        label: '# of Issues',
        data: Object.values(issueCounts),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar data={data} />
    </div>
  );
};

export default BarGraph;
