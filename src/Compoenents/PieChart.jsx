import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './PieChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ resolvedCount, unresolvedCount }) => {
  const data = {
    labels: ['Resolved', 'Unresolved'],
    datasets: [
      {
        label: '# of Issues',
        data: [resolvedCount, unresolvedCount],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
