import { setApartments } from './../actions/app.actions';
import { createReducer } from '@reduxjs/toolkit';
import { IAppState } from './types';
import { setUserAuthentification, showToast, clearToast } from '../actions/app.actions';

const initialState: IAppState = {
  apartments: [],
  isUserAuthentificationed: false,
  toastMessage: '',
  toastType: 'danger',
};

const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUserAuthentification, (state, action) => ({
    ...state,
    isUserAuthentificationed: action.payload,
  })),
  builder.addCase(showToast, (state, action) => ({
    ...state,
    toastMessage: action.payload.toastMessage,
    toastType: action.payload.toastType,
  })),
  builder.addCase(clearToast, (state) => ({
    ...state,
    toastMessage: '',
  })),
  builder.addCase(setApartments, (state, action) => ({
    ...state,
    apartments: action.payload,
  }));
});

export default appReducer;
