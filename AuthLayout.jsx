import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, Paper, Typography } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const AuthLayout = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
          animation: 'pulse 4s ease-in-out infinite',
        },
        '@keyframes pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.5 },
          '50%': { transform: 'scale(1.1)', opacity: 0.8 },
        },
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)',
              mb: 2,
              boxShadow: '0 8px 32px rgba(212, 175, 55, 0.4)',
            }}
          >
            <LocalHospitalIcon sx={{ fontSize: 48, color: '#000' }} />
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
            Hospital Management
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Streamlined Healthcare Operations
          </Typography>
        </Box>

        <Paper
          elevation={24}
          sx={{
            p: 4,
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(26, 26, 26, 1) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <Outlet />
        </Paper>

        <Typography
          variant="caption"
          sx={{
            display: 'block',
            textAlign: 'center',
            mt: 3,
            color: 'text.secondary',
          }}
        >
          © 2025 Hospital Management System. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default AuthLayout;