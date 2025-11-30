import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import PrivateRoute from './PrivateRoute';

// Auth Pages
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';

// Dashboard
import Dashboard from '../pages/dashboard/Dashboard';

// Patient Pages
import PatientList from '../pages/patients/PatientList';
import RegisterPatient from '../pages/patients/RegisterPatient';
import PatientDetails from '../pages/patients/PatientDetails';

// Prescription Pages
import PrescriptionList from '../pages/prescriptions/PrescriptionList';
import CreatePrescription from '../pages/prescriptions/CreatePrescription';

// User Management
import UserList from '../pages/users/UserList';
import CreateUser from '../pages/users/CreateUser';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Patient Routes */}
          <Route path="/patients" element={<PatientList />} />
          <Route path="/patients/register" element={<RegisterPatient />} />
          <Route path="/patients/:id" element={<PatientDetails />} />
          
          {/* Prescription Routes */}
          <Route path="/prescriptions" element={<PrescriptionList />} />
          <Route path="/prescriptions/create" element={<CreatePrescription />} />
          
          {/* User Management Routes */}
          <Route path="/users" element={<UserList />} />
          <Route path="/users/create" element={<CreateUser />} />
        </Route>
      </Route>

      {/* Default Redirect */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;