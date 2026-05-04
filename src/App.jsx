import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import DashboardLayout from './layouts/DashboardLayout';
import ProtectedRoute from './routes/ProtectedRoute';
import { useAuth } from './context/AuthContext';
import './App.css'; 

// Page Imports
import AdminDashboard from './pages/Admin/AdminDashboard';
import EmployeeList from './pages/Admin/EmployeeList';
import EmployeeDashboard from './pages/Employee/EmployeeDashboard';
import CustomerDashboard from './pages/Customer/CustomerDashboard';
import HelpCenter from './pages/Shared/HelpCenter';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<DashboardLayout />}>
            
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/employees" element={<EmployeeList />} />
            
              <Route path="/admin/customers" element={
                <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                  <h2>Customer Insights</h2>
                  <p style={{ color: 'var(--text-muted)' }}>Module coming soon...</p>
                </div>
              } />
            </Route>

            
            <Route element={<ProtectedRoute allowedRoles={['employee']} />}>
              <Route path="/employee/tasks" element={<EmployeeDashboard />} />
            </Route>

            
            <Route element={<ProtectedRoute allowedRoles={['customer']} />}>
              <Route path="/customer/services" element={<CustomerDashboard />} />
            </Route>

            
            <Route path="/help" element={<HelpCenter />} />

            
            <Route path="/dashboard" element={<RoleBasedRedirect />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}


const RoleBasedRedirect = () => {
  const { user } = useAuth();
  if (user.role === 'admin') return <Navigate to="/admin/dashboard" replace />;
  if (user.role === 'employee') return <Navigate to="/employee/tasks" replace />;
  return <Navigate to="/customer/services" replace />;
};

export default App;