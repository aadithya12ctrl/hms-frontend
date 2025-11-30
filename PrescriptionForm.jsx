// src/components/forms/PrescriptionForm.jsx
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const PrescriptionForm = ({ initialData = {}, onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    patientId: initialData.patientId || '',
    medications: initialData.medications || '',
    instructions: initialData.instructions || '',
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
        label="Patient ID"
        name="patientId"
        value={formData.patientId}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Medications"
        name="medications"
        value={formData.medications}
        onChange={handleChange}
        fullWidth
        required
        helperText="Separate multiple medications with commas"
        margin="normal"
      />
      <TextField
        label="Instructions"
        name="instructions"
        value={formData.instructions}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" disabled={loading} sx={{ mt: 3 }}>
        {loading ? 'Saving...' : 'Save Prescription'}
      </Button>
    </Box>
  );
};

export default PrescriptionForm;
