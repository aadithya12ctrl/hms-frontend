// src/utils/constants.js
export const APP_NAME = 'Hospital Management System';
export const APP_VERSION = '1.0.0';

// User Roles
export const ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  HOSPITAL_ADMIN: 'HOSPITAL_ADMIN',
  DOCTOR: 'DOCTOR',
  NURSE: 'NURSE',
  PHARMACIST: 'PHARMACIST',
  RECEPTIONIST: 'RECEPTIONIST',
};

// User Status
export const USER_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  LOCKED: 'LOCKED',
  PASSWORD_EXPIRED: 'PASSWORD_EXPIRED',
};

// Patient Types
export const PATIENT_TYPES = {
  OPD: 'OPD',
  IPD: 'IPD',
};

// Blood Groups
export const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

// Gender Options
export const GENDER_OPTIONS = ['Male', 'Female', 'Other'];

// Permissions
export const PERMISSIONS = {
  // Dashboard
  DASHBOARD_VIEW: 'DASHBOARD:VIEW',
  
  // Patient Management
  PATIENT_READ: 'PATIENT:READ',
  PATIENT_CREATE: 'PATIENT:CREATE',
  PATIENT_UPDATE: 'PATIENT:UPDATE',
  PATIENT_DELETE: 'PATIENT:DELETE',
  
  // Prescription Management
  PRESCRIPTION_READ: 'PRESCRIPTION:READ',
  PRESCRIPTION_CREATE: 'PRESCRIPTION:CREATE',
  PRESCRIPTION_UPDATE: 'PRESCRIPTION:UPDATE',
  PRESCRIPTION_DELETE: 'PRESCRIPTION:DELETE',
  
  // User Management
  USER_READ: 'USER:READ',
  USER_CREATE: 'USER:CREATE',
  USER_UPDATE: 'USER:UPDATE',
  USER_DELETE: 'USER:DELETE',
  
  // Settings
  SETTINGS_VIEW: 'SETTINGS:VIEW',
  SETTINGS_UPDATE: 'SETTINGS:UPDATE',
};

// API Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  SESSION_EXPIRED: 'Your session has expired. Please login again.',
  SERVER_ERROR: 'Something went wrong. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login successful!',
  LOGOUT_SUCCESS: 'Logged out successfully.',
  PATIENT_CREATED: 'Patient registered successfully!',
  PATIENT_UPDATED: 'Patient updated successfully!',
  PATIENT_DELETED: 'Patient deleted successfully!',
  PRESCRIPTION_CREATED: 'Prescription created successfully!',
  USER_CREATED: 'User created successfully!',
  PASSWORD_CHANGED: 'Password changed successfully!',
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  ROWS_PER_PAGE_OPTIONS: [10, 20, 50, 100],
};

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  FULL: 'MMMM dd, yyyy, hh:mm a',
  INPUT: 'yyyy-MM-dd',
  TIME: 'hh:mm a',
};

// File Upload
export const FILE_UPLOAD = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/jpg'],
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword'],
};

// Local Storage Keys
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  TENANT_ID: 'tenantId',
  USER_DATA: 'userData',
  THEME_MODE: 'themeMode',
};
