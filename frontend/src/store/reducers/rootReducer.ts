import { combineReducers } from '@reduxjs/toolkit';
import { listUsers } from './usersListSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../index';
import { visibleFlagsSlice } from './visibleFlagsSlice';
import { listTemplates } from './templateSlice';
import { userInfoSlice } from './userInfoSlice';
import { pollSlice } from './pollSlice';

export const rootReducer = combineReducers({
  user: userInfoSlice.reducer,
  flag: visibleFlagsSlice.reducer,
  users: listUsers.reducer,
  listTemplates: listTemplates.reducer,
  poll: pollSlice.reducer
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
