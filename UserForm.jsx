// src/components/forms/UserForm.jsx
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

const UserForm = ({ initialData = {}, onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    email: initialData.email || '',
    role: initialData.role || '',
    password: '',
  });

  const roles = ['ADMIN', 'DOCTOR', 'RECEPTIONIST'];

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
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <FormControl fullWidth required margin="normal">
        <InputLabel>Role</InputLabel>
        <Select name="role" value={formData.role} onChange={handleChange} label="Role">
          <MenuItem value=""><em>None</em></MenuItem>
          {roles.map((role) => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        required={!initialData.name}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{ mt: 3 }}>
        {loading ? 'Saving...' : 'Save User'}
      </Button>
    </Box>
  );
};

export default UserForm;
