import { createReducer } from '@reduxjs/toolkit';
import { IAppUser } from './types';
import { setUser } from '../actions/user.actions';

const initialState: IAppUser = {
  id: 0,
  email: '',
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, action) => ({
    ...state,
    id: action.payload.id,
    email: action.payload.email,
  }));
});

export default userReducer;
