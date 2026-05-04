import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; 

const DashboardLayout = () => {
  const location = useLocation();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 400);

  // FIX: Ensures the dashboard snaps back to the top when navigating between routes
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 400);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [location.pathname]);

  // Shared centering logic for all screen sizes
  const containerMaxWidth = '1100px'; 

  const mainContentStyles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',      // Shifs entire layout to center for 1024px+
    backgroundColor: '#f8fafc', 
    overflowY: 'auto',
    overflowX: 'hidden',
    width: '100%',
    minHeight: '100vh'
  };

  const sectionWrapper = {
    width: '100%',
    maxWidth: containerMaxWidth,
    padding: isSmallScreen ? '0 16px' : '0 40px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div className="app-layout" style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      
      <main className="main-content" style={mainContentStyles}>
        {/* Global Header Section */}
        <header style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          paddingTop: isSmallScreen ? '12px' : '24px',
          paddingBottom: '12px',
          borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div style={{ ...sectionWrapper, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ 
              fontSize: isSmallScreen ? '1.25rem' : '1.75rem', 
              fontWeight: '700', 
              margin: 0, 
              color: 'var(--text-main)',
              whiteSpace: 'nowrap' 
            }}>
              Overview
            </h1>
            
            <div className="glass-panel" style={{ 
              padding: isSmallScreen ? '4px 10px' : '8px 20px', 
              fontSize: isSmallScreen ? '0.75rem' : '0.9rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              borderRadius: '50px',
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              border: '1px solid rgba(255,255,255,0.5)',
              whiteSpace: 'nowrap'
            }}>
              <span style={{ color: 'var(--text-muted)' }}>Welcome,</span> 
              <strong style={{ color: '#1e293b' }}>Shivansh</strong>
            </div>
          </div>
        </header>

        {/* Content Area - Shifting as one unit */}
        <div className="content-area" style={{ 
          ...sectionWrapper, 
          paddingTop: isSmallScreen ? '16px' : '32px',
          paddingBottom: '80px',
          flex: 1, overflowY: 'visible'
        }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;