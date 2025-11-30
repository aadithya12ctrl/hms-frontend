// src/components/tables/PatientTable.jsx
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Avatar,
  Chip,
  Typography,
  Box,
} from '@mui/material';
import { Visibility as VisibilityIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { format } from 'date-fns';

const PatientTable = ({ patients, loading, onView, onEdit, onDelete }) => {
  const getStatusColor = (type) => (type === 'OPD' ? 'primary' : 'secondary');

  if (loading) {
    return <Typography>Loading patients...</Typography>;
  }

  if (!patients.length) {
    return <Typography>No patients found.</Typography>;
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Patient ID</TableCell>
            <TableCell>Patient Info</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Blood Group</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Registered On</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient.id} hover>
              <TableCell>
                <Typography fontWeight={600}>{patient.patientId}</Typography>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" gap={1.5}>
                  <Avatar sx={{ bgcolor: 'primary.main', color: 'black' }}>
                    {patient.firstName?.[0]}
                  </Avatar>
                  <Box>
                    <Typography fontWeight={600}>
                      {patient.firstName} {patient.lastName}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {patient.gender} • {patient.age} years
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography>{patient.phone}</Typography>
                <Typography variant="caption" color="text.secondary">{patient.email}</Typography>
              </TableCell>
              <TableCell>
                <Chip label={patient.bloodGroup} size="small" sx={{ fontWeight: 600 }} />
              </TableCell>
              <TableCell>
                <Chip
                  label={patient.type}
                  size="small"
                  color={getStatusColor(patient.type)}
                />
              </TableCell>
              <TableCell>
                <Typography>{format(new Date(patient.createdAt), 'MMM dd, yyyy')}</Typography>
              </TableCell>
              <TableCell align="right">
                <IconButton size="small" onClick={() => onView(patient)} color="primary">
                  <VisibilityIcon />
                </IconButton>
                <IconButton size="small" onClick={() => onEdit(patient)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton size="small" onClick={() => onDelete(patient)} color="error">
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

export default PatientTable;
