import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; 

const DashboardLayout = () => {
  const location = useLocation();

  // FIX: Ensures the dashboard snaps back to the top when navigating between routes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <header className="main-header">
          <h1 style={{ fontSize: '1.75rem', fontWeight: '700', margin: 0, color: 'var(--text-main)' }}>
            Overview
          </h1>
          <div className="glass-panel" style={{ padding: '8px 20px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--text-muted)' }}>Welcome,</span> <strong>Shivansh</strong>
          </div>
        </header>

        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;