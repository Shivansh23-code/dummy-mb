import React from 'react';
import './EmployeeList.css';
import { UserCheck, Clock, Shield } from 'lucide-react';

const EmployeeList = () => {
  const employees = [
    { id: 1, name: "Amit R.", role: "Senior Developer", status: "Online", performance: "94%", attendance: "Present" },
    { id: 2, name: "Sarah J.", role: "Customer Support", status: "Away", performance: "88%", attendance: "On Leave" },
    { id: 4, name: "Vikram S.", role: "Data Analyst", status: "Offline", performance: "91%", attendance: "Present" },
    { id: 5, name: "Shivansh T.", role: "Java Developer", status: "Online", performance: "90%", attendance: "Present" },
    { id: 6, name: "Ayush T.", role: "Java Developer", status: "Online", performance: "94%", attendance: "Present" },
    { id: 7, name: "Satyam P.", role: "Java Developer", status: "Online", performance: "76%", attendance: "On Leave" },
    { id: 8, name: "Kartik A.", role: "Data Analyst", status: "Offline", performance: "96%", attendance: "Present" },
    { id: 9, name: "Rahul S.", role: "Customer Support", status: "Offline", performance: "86%", attendance: "Absent" },
    { id: 10, name: "Vikram T.", role: "Data Analyst", status: "Offline", performance: "45%", attendance: "Present" },
    { id: 11, name: "Aarav M.", role: "Tech Lead Developer", status: "Offline", performance: "89%", attendance: "Absent" },
    { id: 12, name: "Shubham T.", role: "HR Manager", status: "Offline", performance: "68%", attendance: "Present" },
    { id: 13, name: "Anush V.", role: "Assistant Manager", status: "Offline", performance: "84%", attendance: "On Leave" },

  ];

  return (
    <div className="employee-page">
      <div className="page-header">
        <h2>Team Directory</h2>
        <button className="add-btn">+ Add New</button>
      </div>

      <div className="employee-grid">
        {employees.map(emp => (
          <div key={emp.id} className="glass-panel emp-card">
            <div className="emp-avatar">
               <Shield size={20} color="#4f46e5" />
            </div>
            <div className="emp-info">
              <h3>{emp.name}</h3>
              <p>{emp.role}</p>
            </div>
            <div className="emp-metrics">
              <div className="metric">
                <span className="label">Performance</span>
                <span className="value">{emp.performance}</span>
              </div>
              <div className="metric">
                <span className="label">Attendance</span>
                <span className={emp.attendance === 'Present' ? 'status-ok' : 'status-bad'}>
                  {emp.attendance}
                </span>
              </div>
            </div>
            <button className="profile-btn">View Full Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;