// ===================================
// src/utils/validators.js
// ===================================
import * as yup from 'yup';

/**
 * Patient Registration Validation Schema
 */
export const patientValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must not exceed 50 characters'),
  
  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must not exceed 50 characters'),
  
  dateOfBirth: yup
    .date()
    .required('Date of birth is required')
    .max(new Date(), 'Date of birth cannot be in the future'),
  
  gender: yup
    .string()
    .required('Gender is required')
    .oneOf(['Male', 'Female', 'Other'], 'Invalid gender selection'),
  
  bloodGroup: yup
    .string()
    .required('Blood group is required')
    .oneOf(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], 'Invalid blood group'),
  
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[\d\s\-\+\(\)]{10,}$/, 'Invalid phone number format'),
  
  email: yup
    .string()
    .email('Invalid email format')
    .nullable(),
  
  address: yup
    .string()
    .required('Address is required')
    .min(10, 'Address must be at least 10 characters'),
  
  type: yup
    .string()
    .required('Patient type is required')
    .oneOf(['OPD', 'IPD'], 'Invalid patient type'),
});

/**
 * Login Validation Schema
 */
export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

/**
 * Password Change Validation Schema
 */
export const passwordChangeSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .required('Current password is required'),
  
  newPassword: yup
    .string()
    .required('New password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain uppercase, lowercase, number, and special character'
    ),
  
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('newPassword')], 'Passwords must match'),
});

/**
 * User Creation Validation Schema
 */
export const userValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters'),
  
  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[\d\s\-\+\(\)]{10,}$/, 'Invalid phone number'),
  
  department: yup
    .string()
    .required('Department is required'),
  
  roles: yup
    .array()
    .min(1, 'At least one role is required')
    .required('Roles are required'),
});