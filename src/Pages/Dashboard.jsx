import React, { useState, useEffect } from 'react';
import PieChart from '../Compoenents/PieChart';
import BarGraph from '../Compoenents/BarGraph';
import LineGraph from '../Compoenents/LineGraph';
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://us-central1-agentbuilderhackathon.cloudfunctions.net/process_text/analytics');
        const responseData = await response.json();
        setData(responseData.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const resolvedCount = data.filter(issue => issue.resolved_status).length;
  const unresolvedCount = data.filter(issue => !issue.resolved_status).length;

  const issueCounts = data.reduce((acc, issue) => {
    acc[issue.issue_category] = (acc[issue.issue_category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Issue Tracking Dashboard</h1>
        <p>Monitor the status and categories of customer issues in real-time.</p>
      </header>
      <main className="dashboard-main">
        <div className="chart-wrapper">
          <h2 className="chart-title">Resolved vs Unresolved Issues</h2>
          <PieChart resolvedCount={resolvedCount} unresolvedCount={unresolvedCount} />
        </div>
        <div className="chart-wrapper">
          <h2 className="chart-title">Issues by Category</h2>
          <BarGraph issueCounts={issueCounts} />
        </div>
        <div className="chart-wrapper">
          <h2 className="chart-title">Issues Per Day</h2>
          <LineGraph data={data} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
