// ===================================
// src/api/userService.js
// ===================================
import axiosInstance from './axiosConfig';

export const userService = {
  // Get all users
  getUsers: async (params = {}) => {
    const { page = 1, limit = 20, role = '', department = '' } = params;
    const response = await axiosInstance.get('/users', {
      params: { page, limit, role, department },
    });
    return response.data;
  },

  // Get user by ID
  getUserById: async (userId) => {
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data;
  },

  // Create new user
  createUser: async (userData) => {
    const response = await axiosInstance.post('/users', userData);
    return response.data;
  },

  // Update user
  updateUser: async (userId, userData) => {
    const response = await axiosInstance.put(`/users/${userId}`, userData);
    return response.data;
  },

  // Delete user
  deleteUser: async (userId) => {
    const response = await axiosInstance.delete(`/users/${userId}`);
    return response.data;
  },

  // Update user status
  updateUserStatus: async (userId, status) => {
    const response = await axiosInstance.patch(`/users/${userId}/status`, {
      status,
    });
    return response.data;
  },

  // Reset user password (Admin)
  resetUserPassword: async (userId) => {
    const response = await axiosInstance.post(`/users/${userId}/reset-password`);
    return response.data;
  },

  // Get user roles
  getRoles: async () => {
    const response = await axiosInstance.get('/users/roles');
    return response.data;
  },

  // Get user permissions
  getPermissions: async () => {
    const response = await axiosInstance.get('/users/permissions');
    return response.data;
  },

  // Assign roles to user
  assignRoles: async (userId, roleIds) => {
    const response = await axiosInstance.post(`/users/${userId}/roles`, {
      roleIds,
    });
    return response.data;
  },
};