import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  LinearProgress,
} from '@mui/material';
import {
  People as PeopleIcon,
  LocalHospital as HospitalIcon,
  Description as DescriptionIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';

const StatCard = ({ title, value, icon: Icon, color, trend }) => (
  <Card
    sx={{
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '150px',
        height: '150px',
        background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`,
        borderRadius: '50%',
        transform: 'translate(30%, -30%)',
      },
    }}
  >
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
            {value}
          </Typography>
          {trend && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <TrendingUpIcon sx={{ fontSize: 18, color: 'success.main' }} />
              <Typography variant="caption" color="success.main" fontWeight={600}>
                +{trend}% from last month
              </Typography>
            </Box>
          )}
        </Box>
        <Avatar
          sx={{
            bgcolor: `${color}20`,
            width: 64,
            height: 64,
          }}
        >
          <Icon sx={{ fontSize: 32, color }} />
        </Avatar>
      </Box>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [stats, setStats] = useState({
    totalPatients: 1247,
    activePatients: 856,
    totalPrescriptions: 3421,
    todayAppointments: 42,
  });

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Welcome back, {user?.firstName}! 👋
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's what's happening with your hospital today
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Patients"
            value={stats.totalPatients}
            icon={PeopleIcon}
            color="#D4AF37"
            trend={12}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Patients"
            value={stats.activePatients}
            icon={HospitalIcon}
            color="#00C853"
            trend={8}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Prescriptions"
            value={stats.totalPrescriptions}
            icon={DescriptionIcon}
            color="#2196F3"
            trend={15}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Today's Appointments"
            value={stats.todayAppointments}
            icon={TrendingUpIcon}
            color="#FFA500"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Recent Patients Activity
              </Typography>
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography color="text.secondary">
                  Patient activity chart will be displayed here
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Quick Stats
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">OPD Patients</Typography>
                  <Typography variant="body2" fontWeight={600}>
                    68%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={68}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'rgba(212, 175, 55, 0.15)',
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(90deg, #D4AF37 0%, #FFD700 100%)',
                    },
                  }}
                />
              </Box>
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">IPD Patients</Typography>
                  <Typography variant="body2" fontWeight={600}>
                    32%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={32}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: 'rgba(212, 175, 55, 0.15)',
                    '& .MuiLinearProgress-bar': {
                      background: 'linear-gradient(90deg, #D4AF37 0%, #FFD700 100%)',
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;