// src/components/tables/PrescriptionTable.jsx
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
} from '@mui/material';
import { Visibility as VisibilityIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const PrescriptionTable = ({ prescriptions, loading, onView, onEdit, onDelete }) => {
  if (loading) {
    return <Typography>Loading prescriptions...</Typography>;
  }

  if (!prescriptions.length) {
    return <Typography>No prescriptions found.</Typography>;
  }

  return (
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
          {prescriptions.map((prescription) => (
            <TableRow key={prescription.id} hover>
              <TableCell>{prescription.id}</TableCell>
              <TableCell>{prescription.patientId}</TableCell>
              <TableCell>{prescription.medications.join(', ')}</TableCell>
              <TableCell>{prescription.instructions}</TableCell>
              <TableCell>{new Date(prescription.date).toLocaleDateString()}</TableCell>
              <TableCell align="right">
                <IconButton size="small" onClick={() => onView(prescription)} color="primary">
                  <VisibilityIcon />
                </IconButton>
                <IconButton size="small" onClick={() => onEdit(prescription)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton size="small" onClick={() => onDelete(prescription)} color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PrescriptionTable;
