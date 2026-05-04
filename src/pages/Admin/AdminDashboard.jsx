import React from 'react';
import './AdminDashboard.css';
import { Users, Activity, CreditCard, AlertCircle, UserPlus, Server, ShoppingCart, Timer, Bell, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  // Mock Data for the UI
  const stats = [
    { label: 'Active Employees', value: '12/15', icon: <Users color="#4f46e5" />, trend: '3 On Break' },
    { label: 'Customer Requests', value: '48', icon: <Activity color="#10b981" />, trend: '5 Urgent' },
    { label: 'Revenue (MTD)', value: '$12,450', icon: <CreditCard color="#f59e0b" />, trend: '+12% vs last month' },
    { label: 'Pending Complaints', value: '3', icon: <AlertCircle color="#ef4444" />, trend: 'Resolution: 98%' },
    { label: 'New Signups', value: '27', icon: <UserPlus color="#3b82f6" />, trend: '+8 today' },
    { label: 'Server Uptime', value: '99.9%', icon: <Server color="#22c55e" />, trend: 'No downtime' },
    { label: 'Orders Processed', value: '156', icon: <ShoppingCart color="#a855f7" />, trend: '+24 today' },
    { label: 'Avg Response Time', value: '1.2s', icon: <Timer color="#f97316" />, trend: '-0.3s improved' },
    { label: 'System Alerts', value: '7', icon: <Bell color="#ef4444" />, trend: '2 critical' },
    { label: 'Conversion Rate', value: '4.8%', icon: <TrendingUp color="#14b8a6" />, trend: '+0.6% increase' }
  ];

  return (
    <div className="admin-container">

      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-panel stat-card">
            <div className="stat-header">
              <div className="icon-wrapper">{stat.icon}</div>
              <span className="trend-text">{stat.trend}</span>
            </div>
            <div className="stat-body">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="dashboard-section">
        <div className="section-header">
          <h2>Employee Working Status</h2>
          <button className="view-all-btn">Manage Team</button>
        </div>
        <div className="glass-panel table-container">
          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Current Task</th>
                <th>Status</th>
                <th>Customer Serving</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amit R.</td>
                <td>Technical Support</td>
                <td><span className="badge active">Online</span></td>
                <td>Ashutosh S.</td>
                <td><button className="text-link">Monitor</button></td>
              </tr>
              <tr>
                <td>Sarah J.</td>
                <td>Billing Inquiry</td>
                <td><span className="badge break">On Break</span></td>
                <td>Anthony G.</td>
                <td><button className="text-link">Monitor</button></td>
              </tr>
              <tr>
                <td>Chandan M.</td>
                <td>Technical Support</td>
                <td><span className="badge active">Online</span></td>
                <td>Rajan G.</td>
                <td><button className="text-link">Monitor</button></td>
              </tr>

              <tr>
                <td>Neha S.</td>
                <td>Customer Success</td>
                <td><span className="badge break">On Break</span></td>
                <td>Rahul V.</td>
                <td><button className="text-link">Monitor</button></td>
              </tr>

              <tr>
                <td>Rohit K.</td>
                <td>Backend Engineer</td>
                <td><span className="badge offline">Offline</span></td>
                <td>Priya S.</td>
                <td><button className="text-link">Monitor</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div className="dashboard-section">
        <div className="section-header">
          <h2>Recent Customer Activity</h2>
        </div>
        <div className="glass-panel table-container">
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Service Plan</th>
                <th>Payment Status</th>
                <th>Upcoming Service</th>
              </tr>
            </thead>
            <tbody>
              {/* Paid */}
              <tr>
                <td>Global Tech Solutions</td>
                <td>Premium AI Suite</td>
                <td><span className="badge paid">Paid</span></td>
                <td>May 15, 2026</td>
              </tr>
              <tr>
                <td>Mech Buddy Corporation</td>
                <td>Premium AI Suite</td>
                <td><span className="badge paid">Paid</span></td>
                <td>June 19, 2026</td>
              </tr>
              <tr>
                <td>Infra n Co's Constructions</td>
                <td>Premium AI Suite</td>
                <td><span className="badge paid">Paid</span></td>
                <td>Jan 12, 2026</td>
              </tr>
              {/* Pending */}
              <tr>
                <td>Creative Studio Ltd.</td>
                <td>Basic Analytics</td>
                <td><span className="badge pending">Pending</span></td>
                <td>Aug 10, 2026</td>
              </tr>
              <tr>
                <td>Innovative Solutions Ltd.</td>
                <td>Basic Analytics</td>
                <td><span className="badge pending">Pending</span></td>
                <td>Oct 9, 2026</td>
              </tr>
              <tr>
                <td>ShriRam Group Logistics</td>
                <td>Basic Analytics</td>
                <td><span className="badge pending">Pending</span></td>
                <td>July 11, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </div>
  );
};

export default AdminDashboard;