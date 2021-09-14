import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosRequest } from '../../api/axios';

export const axiosGetTemplates = createAsyncThunk(
  'templates/axiosGetTemplates',
  async (_, thunkAPI) => {
    try {
      const response = await axiosRequest.get('/template');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addTemplateInfo = createAction(
  'templates/addTemplateInfo',
  function info(id: number) {
    return {
      payload: {
        id
      }
    };
  }
);

export const axiosDeleteTemplates = createAsyncThunk(
  'templates/axiosDeleteTemplates',
  async (id: number, thunkAPI) => {
    try {
      await axiosRequest.delete(`/template/${id}`);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const axiosAddTemplate = createAsyncThunk(
  'templates/axiosAddTemplate',
  async (data: Record<any, any>, thunkAPI) => {
    try {
      const response = await axiosRequest.post(`/template`, data);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteStatusAndError = createAction(
  'templates/deleteStatusAndError'
);

export const addTemplate = createAction(
  'templates/addTemplate',
  (data: Record<any, any>) => {
    return {
      payload: {
        data
      }
    };
  }
);
export const filterTemplate = createAction(
  'templates/filterTemplate',
  function info(id: number) {
    return {
      payload: {
        id
      }
    };
  }
);

export const selectTemplate = createAction('templates/selectTemplate');
export const deleteTemplateInfo = createAction('templates/deleteTemplateInfo');
export const deleteSelectedTemplate = createAction(
  'templates/deleteSelectedTemplate'
);
