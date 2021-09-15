import { createReducer } from '@reduxjs/toolkit';
import { IAppState } from './types';
import { setUserAuthentication, showToast, clearToast } from '../actions/app.actions';

const initialState: IAppState = {
  isUserAuthenticated: false,
  toastMessage: '',
};

const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserAuthentication, (state, action) => ({
    ...state,
    isUserAuthenticated: action.payload,
  })),
  builder.addCase(showToast, (state, action) => ({
    ...state,
    toastMessage: action.payload,
  })),
  builder.addCase(clearToast, (state) => ({
    ...state,
    toastMessage: '',
  }));
});

export default appReducer;
