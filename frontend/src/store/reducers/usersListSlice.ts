import { createSlice } from '@reduxjs/toolkit';
import { axiosGetUsers } from '../actions/usersListAction';

interface UsersProps {
  users: Array<Record<string, any>>;
  loading: boolean;
}
const initialState: UsersProps = {
  users: [],
  loading: false
};
export const listUsers = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(axiosGetUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(axiosGetUsers.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(axiosGetUsers.pending, (state, action) => {
      state.loading = true;
    });
  }
});
