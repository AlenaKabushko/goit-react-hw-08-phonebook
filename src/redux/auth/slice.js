import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations'
import { Notify } from 'notiflix';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
      [register.fulfilled](state, action) {
        Notify.success('Successful registration!')
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
      [logIn.fulfilled](state, action) {
        Notify.success('Successful login!')
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      },
      [logOut.fulfilled](state) {
        Notify.success('Successful logout!')
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      },
      [refreshUser.pending](state) {
        state.isRefreshing = true;
      },
      [refreshUser.fulfilled](state, action) {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      },
      [refreshUser.rejected](state) {
        state.isRefreshing = false;
      },
    }
   
})

export const authReducer = authSlice.reducer;

