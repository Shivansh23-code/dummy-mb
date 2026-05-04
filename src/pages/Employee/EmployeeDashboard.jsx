import React from 'react';
import './EmployeeDashboard.css';

const EmployeeDashboard = () => {
  const assignedCustomer = { name: "Shivansh Tiwari", request: "API Integration Issue", timeStarted: "10:30 AM" };

  return (
    <div className="employee-dashboard">
      <div className="glass-panel active-session">
        <h3>Current Session</h3>
        <div className="session-details">
          <p><strong>Customer:</strong> {assignedCustomer.name}</p>
          <p><strong>Task:</strong> {assignedCustomer.request}</p>
          <button className="resolve-btn">Mark as Resolved</button>
        </div>
      </div>
      
      <div className="stats-row">
        <div className="glass-panel stat">Attendance: 98%</div>
        <div className="glass-panel stat">Salary Status: Disbursed</div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;