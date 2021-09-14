import { createSlice } from '@reduxjs/toolkit';
import { axiosSaveUser } from '../actions/userInfoAction';

interface UserInfoProps {
  id: number | null;
  lastName: string | null;
  firstName: string | null;
  email: string | null;
  role: string | null;
  profileImage: string | null;
  status: string | null;
  error: string | unknown;
}

const initialState: UserInfoProps = {
  id: null,
  lastName: null,
  firstName: null,
  email: null,
  role: null,
  profileImage: null,
  status: null,
  error: null
};

export const userInfoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setStateUserInfo: (state, action) => {
      state.id = action.payload.id;
      state.lastName = action.payload.lastName;
      state.firstName = action.payload.firstName;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.profileImage = action.payload.profileImage;
    },
    deleteStatusAndError: (state) => {
      state.status = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(axiosSaveUser.fulfilled, (state, action) => {
        localStorage.setItem('token', action.payload.data);
        state.status = 'resolved';
      })
      .addCase(axiosSaveUser.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(axiosSaveUser.pending, (state) => {
        state.status = 'loading';
      });
  }
});
