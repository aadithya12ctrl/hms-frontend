// src/api/authService.js
import axiosInstance from './axiosConfig';

export const authService = {
  // Login
  login: async (email, password) => {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password,
    });
    return response.data;
  },

  // Register Hospital
  registerHospital: async (hospitalData) => {
    const response = await axiosInstance.post('/auth/register', hospitalData);
    return response.data;
  },

  // Get Current User
  getCurrentUser: async () => {
    const response = await axiosInstance.get('/auth/me');
    return response.data;
  },

  // Refresh Token
  refreshToken: async (refreshToken) => {
    const response = await axiosInstance.post('/auth/refresh', {
      refreshToken,
    });
    return response.data;
  },

  // Forgot Password
  forgotPassword: async (email) => {
    const response = await axiosInstance.post('/auth/forgot-password', {
      email,
    });
    return response.data;
  },

  // Reset Password
  resetPassword: async (token, newPassword) => {
    const response = await axiosInstance.post('/auth/reset-password', {
      token,
      newPassword,
    });
    return response.data;
  },

  // Change Password
  changePassword: async (oldPassword, newPassword) => {
    const response = await axiosInstance.post('/auth/change-password', {
      oldPassword,
      newPassword,
    });
    return response.data;
  },

  // Logout
  logout: async () => {
    const response = await axiosInstance.post('/auth/logout');
    return response.data;
  },
};