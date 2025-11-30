// src/pages/auth/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  CircularProgress,
} from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { login } from '../../redux/slices/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await dispatch(login(formData)).unwrap();
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 700, textAlign: 'center' }}>
        Welcome Back
      </Typography>
      <Typography variant="body2" sx={{ mb: 4, color: 'text.secondary', textAlign: 'center' }}>
        Sign in to continue to your dashboard
      </Typography>

      <TextField
        fullWidth
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        sx={{ mb: 3 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email sx={{ color: 'primary.main' }} />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        fullWidth
        label="Password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        value={formData.password}
        onChange={handleChange}
        required
        sx={{ mb: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock sx={{ color: 'primary.main' }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
                sx={{ color: 'primary.main' }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Link
          to="/forgot-password"
          style={{
            color: '#D4AF37',
            textDecoration: 'none',
            fontSize: '0.875rem',
          }}
        >
          Forgot Password?
        </Link>
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        disabled={loading}
        sx={{ mb: 2, py: 1.5 }}
      >
        {loading ? <CircularProgress size={24} /> : 'Sign In'}
      </Button>

      <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
        Don't have an account?{' '}
        <Link to="/register" style={{ color: '#D4AF37', textDecoration: 'none', fontWeight: 600 }}>
          Register Hospital
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
