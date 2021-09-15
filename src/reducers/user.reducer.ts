import { createReducer } from '@reduxjs/toolkit';
import {
  addNewUserApartment,
  removeUserApartment,
} from './../actions/user.actions';
import { IAppUser } from './types';
import { setUser } from '../actions/user.actions';

const initialState: IAppUser = {
  id: 0,
  email: '',
  apartments: []
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, action) => ({
    ...state,
    id: action.payload.id,
    email: action.payload.email,
  })),
  builder.addCase(addNewUserApartment, (state, action) => ({
    ...state,
    apartments: [...state.apartments, action.payload],
  })),
  builder.addCase(removeUserApartment, (state, action) => ({
    ...state,
    apartments: state.apartments.filter((item) => item !== action.payload),
  }));
});

export default userReducer;
