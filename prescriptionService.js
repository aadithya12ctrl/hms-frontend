// ===================================
// src/api/prescriptionService.js
// ===================================
import axiosInstance from './axiosConfig';

export const prescriptionService = {
  // Get all prescriptions
  getPrescriptions: async (params = {}) => {
    const { page = 1, limit = 20, patientId = '', doctorId = '' } = params;
    const response = await axiosInstance.get('/prescriptions', {
      params: { page, limit, patientId, doctorId },
    });
    return response.data;
  },

  // Get prescription by ID
  getPrescriptionById: async (prescriptionId) => {
    const response = await axiosInstance.get(`/prescriptions/${prescriptionId}`);
    return response.data;
  },

  // Create new prescription
  createPrescription: async (prescriptionData) => {
    const response = await axiosInstance.post('/prescriptions', prescriptionData);
    return response.data;
  },

  // Update prescription
  updatePrescription: async (prescriptionId, prescriptionData) => {
    const response = await axiosInstance.put(
      `/prescriptions/${prescriptionId}`,
      prescriptionData
    );
    return response.data;
  },

  // Delete prescription
  deletePrescription: async (prescriptionId) => {
    const response = await axiosInstance.delete(`/prescriptions/${prescriptionId}`);
    return response.data;
  },

  // Get prescriptions by patient
  getPrescriptionsByPatient: async (patientId) => {
    const response = await axiosInstance.get(`/prescriptions/patient/${patientId}`);
    return response.data;
  },

  // Print/Download prescription
  downloadPrescription: async (prescriptionId) => {
    const response = await axiosInstance.get(
      `/prescriptions/${prescriptionId}/download`,
      {
        responseType: 'blob',
      }
    );
    return response.data;
  },

  // Get prescription templates
  getTemplates: async () => {
    const response = await axiosInstance.get('/prescriptions/templates');
    return response.data;
  },

  // Save prescription as template
  saveAsTemplate: async (prescriptionId, templateName) => {
    const response = await axiosInstance.post(
      `/prescriptions/${prescriptionId}/template`,
      { templateName }
    );
    return response.data;
  },
};
