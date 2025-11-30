// ===================================
// src/pages/patients/RegisterPatient.jsx
// ===================================
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  Avatar,
  IconButton,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon, PhotoCamera } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { createPatient } from '../../redux/slices/patientSlice';
import { toast } from 'react-toastify';

const RegisterPatient = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [photoPreview, setPhotoPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await dispatch(createPatient(data)).unwrap();
      toast.success('Patient registered successfully!');
      navigate('/patients');
    } catch (error) {
      toast.error(error || 'Failed to register patient');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton onClick={() => navigate('/patients')} sx={{ mr: 2 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Register New Patient
        </Typography>
      </Box>

      <Card>
        <CardContent sx={{ p: 4 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Photo Upload */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Box sx={{ position: 'relative' }}>
                <Avatar
                  src={photoPreview}
                  sx={{
                    width: 120,
                    height: 120,
                    bgcolor: 'primary.main',
                    fontSize: '2rem',
                  }}
                >
                  P
                </Avatar>
                <IconButton
                  component="label"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    bgcolor: 'primary.main',
                    color: 'black',
                    '&:hover': { bgcolor: 'primary.dark' },
                  }}
                >
                  <PhotoCamera />
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={handlePhotoChange}
                  />
                </IconButton>
              </Box>
            </Box>

            <Grid container spacing={3}>
              {/* Personal Information */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                  Personal Information
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="First Name"
                  {...register('firstName', { required: 'First name is required' })}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Last Name"
                  {...register('lastName', { required: 'Last name is required' })}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  {...register('dateOfBirth', { required: 'Date of birth is required' })}
                  error={!!errors.dateOfBirth}
                  helperText={errors.dateOfBirth?.message}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <FormControl fullWidth error={!!errors.gender}>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    label="Gender"
                    defaultValue=""
                    {...register('gender', { required: 'Gender is required' })}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                  {errors.gender && (
                    <FormHelperText>{errors.gender.message}</FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4}>
                <FormControl fullWidth error={!!errors.bloodGroup}>
                  <InputLabel>Blood Group</InputLabel>
                  <Select
                    label="Blood Group"
                    defaultValue=""
                    {...register('bloodGroup', { required: 'Blood group is required' })}
                  >
                    {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bg) => (
                      <MenuItem key={bg} value={bg}>
                        {bg}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.bloodGroup && (
                    <FormHelperText>{errors.bloodGroup.message}</FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4}>
                <FormControl fullWidth error={!!errors.type}>
                  <InputLabel>Patient Type</InputLabel>
                  <Select
                    label="Patient Type"
                    defaultValue=""
                    {...register('type', { required: 'Patient type is required' })}
                  >
                    <MenuItem value="OPD">OPD (Outpatient)</MenuItem>
                    <MenuItem value="IPD">IPD (Inpatient)</MenuItem>
                  </Select>
                  {errors.type && (
                    <FormHelperText>{errors.type.message}</FormHelperText>
                  )}
                </FormControl>
              </Grid>

              {/* Contact Information */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ mt: 2, mb: 2, color: 'primary.main' }}>
                  Contact Information
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  {...register('phone', { required: 'Phone is required' })}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  {...register('email')}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  multiline
                  rows={3}
                  {...register('address', { required: 'Address is required' })}
                  error={!!errors.address}
                  helperText={errors.address?.message}
                />
              </Grid>

              {/* Emergency Contact */}
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ mt: 2, mb: 2, color: 'primary.main' }}>
                  Emergency Contact
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Emergency Contact Name"
                  {...register('emergencyContactName')}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Emergency Contact Phone"
                  {...register('emergencyContactPhone')}
                />
              </Grid>

              {/* Action Buttons */}
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 3 }}>
                  <Button
                    variant="outlined"
                    onClick={() => navigate('/patients')}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    sx={{ px: 4 }}
                  >
                    {loading ? 'Registering...' : 'Register Patient'}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterPatient;