import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosRequest } from '../../api/axios';

export const axiosAddPoll = createAsyncThunk(
  'poll/axiosAddPoll',
  async (data: Record<any, any>, thunkAPI) => {
    try {
      const response = await axiosRequest.post(`/form`, data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const axiosGetPolls = createAsyncThunk(
  'poll/axiosGetPolls',
  async (_, thunkAPI) => {
    try {
      const response = await axiosRequest.get('/form');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteStatusAndError = createAction('poll/deleteStatusAndError');

export const axiosArchivePoll = createAsyncThunk(
  'poll/axiosArchivePoll',
  async (id: number, thunkAPI) => {
    try {
      const response = await axiosRequest.put(`/form/${id}`, {
        activeStatus: false
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const axiosDeletePoll = createAsyncThunk(
  'poll/axiosDeletePoll',
  async (id: number, thunkAPI) => {
    try {
      const response = await axiosRequest.delete(`/form/${id}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deletePoll = createAction(
  'poll/deletePoll',
  function info(id: number) {
    return {
      payload: {
        id
      }
    };
  }
);
