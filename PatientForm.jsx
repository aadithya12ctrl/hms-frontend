// src/components/forms/PatientForm.jsx
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

const PatientForm = ({ initialData = {}, onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    firstName: initialData.firstName || '',
    lastName: initialData.lastName || '',
    age: initialData.age || '',
    gender: initialData.gender || '',
    phone: initialData.phone || '',
    email: initialData.email || '',
    bloodGroup: initialData.bloodGroup || '',
    type: initialData.type || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Age"
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <FormControl fullWidth required margin="normal">
        <InputLabel>Gender</InputLabel>
        <Select name="gender" value={formData.gender} onChange={handleChange} label="Gender">
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Blood Group</InputLabel>
        <Select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} label="Blood Group">
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="A+">A+</MenuItem>
          <MenuItem value="A-">A-</MenuItem>
          <MenuItem value="B+">B+</MenuItem>
          <MenuItem value="B-">B-</MenuItem>
          <MenuItem value="AB+">AB+</MenuItem>
          <MenuItem value="AB-">AB-</MenuItem>
          <MenuItem value="O+">O+</MenuItem>
          <MenuItem value="O-">O-</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Patient Type</InputLabel>
        <Select name="type" value={formData.type} onChange={handleChange} label="Patient Type">
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="OPD">OPD</MenuItem>
          <MenuItem value="IPD">IPD</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{ mt: 3 }}>
        {loading ? 'Saving...' : 'Save Patient'}
      </Button>
    </Box>
  );
};

export default PatientForm;
