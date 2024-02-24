import { createSlice } from '@reduxjs/toolkit';
import { AUTH_INITIAL_STATE } from '../constants';
import { RootState } from '../shared/state';
import { setCookie, unsetCookie } from '../../core/utils/authUtils';
import { type AuthState } from '../interfaces';

const authSlice = createSlice({
  reducerPath: 'auth',
  name: 'auth',
  initialState: AUTH_INITIAL_STATE,
  reducers: {
    login: (state: AuthState, action: any) => {
      state.loggedIn = true;
      state.user = action.payload;
      setCookie('accessToken', action.payload.token);
    },
    logout: (state: AuthState) => {
      state.loggedIn = false;
      unsetCookie('accessToken');
    },
    setUser: (state: AuthState, action: any) => {
      state.user = action.payload;
    }
  }
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state:RootState) => state.auth;
export default authSlice;
