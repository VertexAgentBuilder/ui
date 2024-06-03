import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const LineGraph = ({ data }) => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    let newChart = null;
    const ctx = document.getElementById('lineChart');

    if (chart) {
      chart.destroy();
    }

    const labels = [];
    const counts = {};

    // Count occurrences of each timestamp
    data.forEach(({ timestamp }) => {
      if (!labels.includes(timestamp.split(" ")[0])) {
        labels.push(timestamp.split(" ")[0]);
        counts[timestamp.split(" ")[0]] = 1;
      } else {
        counts[timestamp.split(" ")[0]]++;
      }
    });

    const datasets = [{
      label: 'Number of Issues',
      data: labels.map(timestamp => counts[timestamp] || 0),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }];

    const config = {
      type: 'line',
      data: {
        labels,
        datasets
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Timestamp'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Number of Issues'
            }
          }
        }
      }
    };

    newChart = new Chart(ctx, config);
    setChart(newChart);

    return () => {
      if (newChart) {
        newChart.destroy();
      }
    };
  }, [data]);

  return (
    <div className="line-chart-container">
      <canvas id="lineChart"></canvas>
    </div>
  );
};

export default LineGraph;
