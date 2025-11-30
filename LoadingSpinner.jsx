// src/components/common/LoadingSpinner.jsx
import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        py: 5,
      }}
    >
      <CircularProgress />
      <Box sx={{ mt: 2, color: 'text.secondary' }}>{message}</Box>
    </Box>
  );
};

export default LoadingSpinner;