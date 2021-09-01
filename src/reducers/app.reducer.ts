import { createReducer } from '@reduxjs/toolkit';
import { IAppState } from './types';
import { setUserAuthentification, showToast, clearToast } from '../actions/app.actions';

const initialState: IAppState = {
  isUserAuthentificationed: false,
  toastMessage: '',
};

const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserAuthentification, (state, action) => ({
    ...state,
    isUserAuthentificationed: action.payload,
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
