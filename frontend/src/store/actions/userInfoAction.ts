import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { uuid } from 'uuidv4';
import { axiosRequest } from '../../api/axios';
const jwt = require('jsonwebtoken');

interface UserProps {
  homeAccountId: string;
  environment: string;
  tenantId: string;
  username: string;
  localAccountId: string;
  name?: string;
  idTokenClaims?: object;
}

export const setStateUserInfo = createAction(
  'user/setStateUserInfo',
  function getUserInfo() {
    const token = localStorage.getItem('token');
    const info = jwt.decode(token);

    return {
      payload: {
        id: info ? info.id : '',
        lastName: info ? info.lastName : '',
        firstName: info ? info.firstName : '',
        email: info ? info.email : '',
        role: info ? info.role : '',
        profileImage: info ? info.profileImage : 'placeholderAvatar.png'
      }
    };
  }
);

export const axiosSaveUser = createAsyncThunk(
  'user/axiosSaveUser',
  async ({ name, username }: UserProps, thunkAPI) => {
    try {
      const [lastName, firstName] = name!
        .trim()
        .replace(/\s+/g, ' ')
        .split(' ');
      const uuidv4 = uuid();
      const response = await axiosRequest.post('/user', {
        email: username,
        userName: username,
        lastName,
        firstName,
        microsoftToken: localStorage.getItem('microsoftToken'),
        profileImage: `${uuidv4}_profileImage${firstName}.png`,
        userRoles: [{ roleId: 1 }]
      });
      await localStorage.setItem('token', String(response.data));
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const deleteStatusAndError = createAction('user/deleteStatusAndError');
