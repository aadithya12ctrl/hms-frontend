import React, { useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  CircularProgress,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrescriptions } from '../../redux/slices/prescriptionSlice'; // Create this slice accordingly
import { Visibility as VisibilityIcon } from '@mui/icons-material';

const PrescriptionList = () => {
  const dispatch = useDispatch();
  const { prescriptions, loading } = useSelector((state) => state.prescription || {});

  useEffect(() => {
    dispatch(fetchPrescriptions());
  }, [dispatch]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Prescriptions
      </Typography>
      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Prescription ID</TableCell>
                <TableCell>Patient ID</TableCell>
                <TableCell>Medications</TableCell>
                <TableCell>Instructions</TableCell>
                <TableCell>Date</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prescriptions?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No prescriptions found.
                  </TableCell>
                </TableRow>
              ) : (
                prescriptions?.map((prescription) => (
                  <TableRow key={prescription.id} hover>
                    <TableCell>{prescription.id}</TableCell>
                    <TableCell>{prescription.patientId}</TableCell>
                    <TableCell>{prescription.medications.join(', ')}</TableCell>
                    <TableCell>{prescription.instructions}</TableCell>
                    <TableCell>{new Date(prescription.date).toLocaleDateString()}</TableCell>
                    <TableCell align="right">
                      <IconButton color="primary" size="small">
                        <VisibilityIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default PrescriptionList;