import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from 'src/api/auth.api';
import LocalStorage from 'src/constants/localStorage';
import { payloadCreator } from 'src/utils/helper';

export const register = createAsyncThunk('auth/register', payloadCreator(authApi.register));
export const login = createAsyncThunk('auth/login', payloadCreator(authApi.login));

const handleAuthFulfilled = (state, action) => {
  const { user, access_token } = action.payload.data;
  state.profile = user;

  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile));
  localStorage.setItem(LocalStorage.accessToken, JSON.stringify(access_token));
};

const auth = createSlice({
  name: 'auth',
  initialState: {
    profile: JSON.parse(localStorage.getItem(LocalStorage.user)) || {},
  },
  extraReducers: {
    [register.fulfilled]: handleAuthFulfilled,
    [login.fulfilled]: handleAuthFulfilled,
  },
});

const authReducer = auth.reducer;
export default authReducer;
