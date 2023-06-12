import React from 'react';
import './css/dashboard.css';
import { Link } from 'react-router-dom'

const DashboardPage = () => {
  return (
    <div className="container">
    <h1>Welcome to the Dashboard</h1>
    <div className="menu">
      <ul>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/student_info'>Student Entry</Link></li>
      </ul>
    </div>
    <div className="content">
      <h2>Dashboard Content</h2>
      <p>This is the dashboard</p>
    </div>
  </div>
  );
};

export default DashboardPage;
