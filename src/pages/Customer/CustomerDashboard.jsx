import React from 'react';
import './CustomerDashboard.css';

const CustomerDashboard = () => {
  const myServices = [
    { name: "Premium Analytics", expiry: "20 Dec 2026", status: "Active" },
    { name: "Cloud Storage", expiry: "15 Jan 2027", status: "Active" }
  ];

  return (
    <div className="customer-dashboard">
      <h2>Welcome Back, Customer</h2>
      <div className="services-grid">
        {myServices.map((service, i) => (
          <div key={i} className="glass-panel service-card">
            <h4>{service.name}</h4>
            <p>Status: <span className="status-badge">{service.status}</span></p>
            <small>Expires: {service.expiry}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDashboard;