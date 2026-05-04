import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { LayoutDashboard, Users, UserCircle, LifeBuoy, Wallet, Briefcase } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { user } = useAuth();

  const allLinks = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20}/>, path: '/dashboard', roles: ['admin', 'employee', 'customer'] },
    { name: 'Manage Employees', icon: <Users size={20}/>, path: '/admin/employees', roles: ['admin'] },
    { name: 'Customer Insights', icon: <UserCircle size={20}/>, path: '/admin/customers', roles: ['admin'] },
    { name: 'My Tasks', icon: <Briefcase size={20}/>, path: '/employee/tasks', roles: ['employee'] },
    { name: 'My Subscriptions', icon: <Wallet size={20}/>, path: '/customer/services', roles: ['customer'] },
    { name: 'Help Centre', icon: <LifeBuoy size={20}/>, path: '/help', roles: ['admin', 'employee', 'customer'] },
  ];

  const filteredLinks = allLinks.filter(link => link.roles.includes(user.role));

  return (
    <div className="sidebar">
      <div className="sidebar-brand">Dashboard</div>
      <nav className="sidebar-nav">
        {filteredLinks.map((link, index) => (
          /* Use NavLink for routing and automatic 'active' class handling */
          <NavLink 
            to={link.path} 
            key={index} 
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
          >
            {link.icon}
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>  
  );
};

export default Sidebar;