import React from 'react';
import './App.css';
import './theme.css';
import Sidebar from './components/Sidebar';
import ChatSystem from './components/ChatSystem';
import StatisticalDashboard from './components/StatisticalDashboard';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />         
      </div>

      <div className="content">
        <StatisticalDashboard />
        <ChatSystem />
      </div>
    </div>
  );
}

export default App;
