import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosRequest } from '../../api/axios';
export const axiosGetUsers = createAsyncThunk(
  'users/axiosGetUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axiosRequest.get('/user');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
