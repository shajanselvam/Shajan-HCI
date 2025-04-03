import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import './StatisticalDashboard.css';

import { Chart as ChartJS } from 'chart.js/auto';

const StatisticalDashboard = () => {
  // Pending Work Tracker (Pie Chart)
  const pendingWorkData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['#ff0000', '#ffa500', '#32cd32'],
      },
    ],
  };

  // Performance Improvement Analysis (Line Chart)
  const performanceData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Performance Trend',
        data: [70, 75, 80, 85],
        borderColor: '#4caf50',
        fill: false,
      },
    ],
  };

  // Completed Work Overview (Stacked Bar Chart)
  const completedWorkData = {
    labels: ['Project A', 'Project B', 'Project C'],
    datasets: [
      {
        label: 'Bugs Fixed',
        data: [10, 5, 15],
        backgroundColor: '#ff6347',
      },
      {
        label: 'Features Developed',
        data: [5, 10, 8],
        backgroundColor: '#4682b4',
      },
    ],
  };

  // Notifications Dashboard (Donut Chart)
  const notificationsData = {
    labels: ['Mentions', 'Meeting Reminders', 'Deadlines', 'Project Updates'],
    datasets: [
      {
        data: [20, 10, 25, 15],
        backgroundColor: ['#8a2be2', '#ff1493', '#ffd700', '#20b2aa'],
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2>Statistical Dashboard</h2>
      <div className="charts">
        <div className="chart">
          <h3>Pending Work Tracker</h3>
          <Doughnut data={pendingWorkData} />
        </div>
        <div className="chart">
          <h3>Performance Improvement Analysis</h3>
          <Line data={performanceData} />
        </div>
        <div className="chart">
          <h3>Completed Work Overview</h3>
          <Bar data={completedWorkData} />
        </div>
        <div className="chart">
          <h3>Notifications Dashboard</h3>
          <Doughnut data={notificationsData} />
        </div>
      </div>
    </div>
  );
};

export default StatisticalDashboard;
