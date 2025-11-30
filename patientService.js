// ===================================
// src/api/patientService.js
// ===================================
import axiosInstance from './axiosConfig';

export const patientService = {
  // Get all patients with pagination and filters
  getPatients: async (params = {}) => {
    const { page = 1, limit = 20, search = '', type = '', department = '' } = params;
    const response = await axiosInstance.get('/patients', {
      params: { page, limit, search, type, department },
    });
    return response.data;
  },

  // Get patient by ID
  getPatientById: async (patientId) => {
    const response = await axiosInstance.get(`/patients/${patientId}`);
    return response.data;
  },

  // Create new patient
  createPatient: async (patientData) => {
    const response = await axiosInstance.post('/patients', patientData);
    return response.data;
  },

  // Update patient
  updatePatient: async (patientId, patientData) => {
    const response = await axiosInstance.put(`/patients/${patientId}`, patientData);
    return response.data;
  },

  // Delete patient
  deletePatient: async (patientId) => {
    const response = await axiosInstance.delete(`/patients/${patientId}`);
    return response.data;
  },

  // Upload patient photo
  uploadPatientPhoto: async (patientId, photoFile) => {
    const formData = new FormData();
    formData.append('photo', photoFile);
    
    const response = await axiosInstance.post(
      `/patients/${patientId}/photo`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  },

  // Search patients
  searchPatients: async (searchTerm) => {
    const response = await axiosInstance.get('/patients/search', {
      params: { q: searchTerm },
    });
    return response.data;
  },

  // Get patient statistics
  getPatientStats: async () => {
    const response = await axiosInstance.get('/patients/statistics');
    return response.data;
  },

  // Export patients to CSV
  exportPatients: async (filters = {}) => {
    const response = await axiosInstance.get('/patients/export', {
      params: filters,
      responseType: 'blob',
    });
    return response.data;
  },
};
