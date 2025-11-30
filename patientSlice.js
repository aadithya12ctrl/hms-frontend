import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosConfig';

export const fetchPatients = createAsyncThunk(
  'patient/fetchPatients',
  async ({ page = 1, limit = 20, search = '', type = '' }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/patients', {
        params: { page, limit, search, type },
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const createPatient = createAsyncThunk(
  'patient/createPatient',
  async (patientData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/patients', patientData);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const patientSlice = createSlice({
  name: 'patient',
  initialState: {
    patients: [],
    currentPatient: null,
    totalPages: 1,
    currentPage: 1,
    loading: false,
    error: null,
  },
  reducers: {
    setCurrentPatient: (state, action) => {
      state.currentPatient = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatients.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.loading = false;
        state.patients = action.payload.patients;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createPatient.fulfilled, (state, action) => {
        state.patients.unshift(action.payload);
      });
  },
});

export const { setCurrentPatient } = patientSlice.actions;
export default patientSlice.reducer;
