// src/pages/patients/PatientList.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
  IconButton,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  FilterList as FilterIcon,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients } from '../../redux/slices/patientSlice';
import { format } from 'date-fns';

const PatientList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { patients, loading, currentPage, totalPages } = useSelector((state) => state.patient);
  
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    dispatch(fetchPatients({ page: page + 1, limit: rowsPerPage, search, type: filterType }));
  }, [dispatch, page, rowsPerPage, search, filterType]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatusColor = (type) => {
    return type === 'OPD' ? 'primary' : 'secondary';
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Patient Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/patients/register')}
          sx={{ px: 3 }}
        >
          Register Patient
        </Button>
      </Box>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <TextField
              placeholder="Search patients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ flexGrow: 1, minWidth: 300 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'primary.main' }} />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel>Patient Type</InputLabel>
              <Select
                value={filterType}
                label="Patient Type"
                onChange={(e) => setFilterType(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="OPD">OPD</MenuItem>
                <MenuItem value="IPD">IPD</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="outlined"
              startIcon={<FilterIcon />}
              onClick={() => {
                setSearch('');
                setFilterType('');
              }}
            >
              Reset
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Card>
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
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} align="center" sx={{ py: 8 }}>
                    <Typography color="text.secondary">Loading patients...</Typography>
                  </TableCell>
                </TableRow>
              ) : patients.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} align="center" sx={{ py: 8 }}>
                    <Typography color="text.secondary">No patients found</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                patients.map((patient) => (
                  <TableRow key={patient.id} hover>
                    <TableCell>
                      <Typography variant="body2" fontWeight={600}>
                        {patient.patientId}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar
                          src={patient.photo}
                          sx={{
                            bgcolor: 'primary.main',
                            color: 'black',
                            width: 40,
                            height: 40,
                          }}
                        >
                          {patient.firstName?.[0]}
                        </Avatar>
                        <Box>
                          <Typography variant="body2" fontWeight={600}>
                            {patient.firstName} {patient.lastName}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {patient.gender} • {patient.age} years
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{patient.phone}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {patient.email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={patient.bloodGroup}
                        size="small"
                        sx={{ fontWeight: 600 }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={patient.type}
                        size="small"
                        color={getStatusColor(patient.type)}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {format(new Date(patient.createdAt), 'MMM dd, yyyy')}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        size="small"
                        onClick={() => navigate(`/patients/${patient.id}`)}
                        sx={{ color: 'primary.main' }}
                      >
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        sx={{ color: 'primary.main' }}
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={totalPages * rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[10, 20, 50]}
        />
      </Card>
    </Box>
  );
};

export default PatientList;

