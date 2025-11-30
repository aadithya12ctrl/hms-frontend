import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Chip,
  CircularProgress,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients, setCurrentPatient } from '../../redux/slices/patientSlice';
import { format } from 'date-fns';

const PatientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { patients, loading, currentPatient } = useSelector((state) => state.patient);

  useEffect(() => {
    if (!patients.length) {
      dispatch(fetchPatients({}));
    }
  }, [dispatch, patients.length]);

  useEffect(() => {
    const patient = patients.find((p) => p.id === id);
    if (patient) {
      dispatch(setCurrentPatient(patient));
    }
  }, [dispatch, id, patients]);

  if (loading || !currentPatient) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  const {
    patientId,
    firstName,
    lastName,
    gender,
    age,
    phone,
    email,
    bloodGroup,
    type,
    createdAt,
  } = currentPatient;

  return (
    <Box>
      <Button variant="outlined" sx={{ mb: 3 }} onClick={() => navigate(-1)}>
        Back
      </Button>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
            <Avatar sx={{ width: 80, height: 80, fontSize: 32 }}>
              {firstName?.[0]}
              {lastName?.[0]}
            </Avatar>
            <Box>
              <Typography variant="h5" fontWeight={700}>
                {firstName} {lastName}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                ID: {patientId}
              </Typography>
              <Chip label={type} sx={{ mt: 1 }} />
            </Box>
          </Box>

          <Typography variant="subtitle2" gutterBottom>
            Gender: {gender}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Age: {age} years
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Phone: {phone}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Email: {email}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Blood Group: {bloodGroup}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Registered On: {format(new Date(createdAt), 'MMM dd, yyyy')}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PatientDetails;
