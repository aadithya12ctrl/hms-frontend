import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { createPrescription } from '../../redux/slices/prescriptionSlice'; // Create this slice accordingly
import { useNavigate } from 'react-router-dom';

const CreatePrescription = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patientId: '',
    medications: '',
    instructions: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert medications string to array by comma
    const medsArray = formData.medications.split(',').map((m) => m.trim());
    dispatch(createPrescription({ ...formData, medications: medsArray })).then(() => {
      navigate('/prescriptions');
    });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Create Prescription
      </Typography>

      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Patient ID"
              name="patientId"
              value={formData.patientId}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Medications (comma separated)"
              name="medications"
              value={formData.medications}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />

            <TextField
              label="Instructions"
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />

            <Box sx={{ mt: 3, textAlign: 'right' }}>
              <Button type="submit" variant="contained" color="primary">
                Create
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreatePrescription;