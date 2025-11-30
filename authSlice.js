import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosConfig';
import jwtDecode from 'jwt-decode';

// Async Thunks
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      const { accessToken, refreshToken, user } = response.data.data;

      // Store tokens
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Decode JWT for tenant info
      const decoded = jwtDecode(accessToken);
      localStorage.setItem('tenantId', decoded.tenantId);

      return { user, accessToken, tenantId: decoded.tenantId };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.clear();
  return null;
});

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/auth/me');
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

// Initial state
const initialState = {
  user: null,
  tenantId: localStorage.getItem('tenantId') || null,
  accessToken: localStorage.getItem('accessToken') || null,
  isAuthenticated: !!localStorage.getItem('accessToken'),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.tenantId = action.payload.tenantId;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.accessToken = null;
        state.tenantId = null;
        state.isAuthenticated = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
