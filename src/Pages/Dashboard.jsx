import React from 'react';
import PieChart from '../Compoenents/PieChart';
import BarGraph from '../Compoenents/BarGraph';
import './Dashboard.css';

const data = [
  { chat_id: "001", customer_id: "C12345", issue_category: "Technical issues", resolved_status: false },
  { chat_id: "002", customer_id: "C67890", issue_category: "Billing or Payments issues", resolved_status: true },
  { chat_id: "003", customer_id: "C54321", issue_category: "Product Enquiries issues", resolved_status: false },
  { chat_id: "004", customer_id: "C09876", issue_category: "Warranty or Returns issues", resolved_status: true },
  { chat_id: "005", customer_id: "C11223", issue_category: "Technical issues", resolved_status: true },
  { chat_id: "006", customer_id: "C44556", issue_category: "Billing or Payments issues", resolved_status: false },
  { chat_id: "007", customer_id: "C77889", issue_category: "Product Enquiries issues", resolved_status: true },
  { chat_id: "008", customer_id: "C99001", issue_category: "Warranty or Returns issues", resolved_status: false },
  { chat_id: "009", customer_id: "C22334", issue_category: "Technical issues", resolved_status: false },
  { chat_id: "010", customer_id: "C55667", issue_category: "Billing or Payments issues", resolved_status: true }
];

const Dashboard = () => {
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
      </main>
    </div>
  );
};

export default Dashboard;
