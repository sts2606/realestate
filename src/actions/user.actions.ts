import { createAction } from '@reduxjs/toolkit';
import { IAppUser } from '../reducers/types';
import {
  SET_USER, ADD_NEW_USER_APARTMENT,
  REMOVE_USER_APARTMENT
} from './types/user.types';

export const setUser = createAction<IAppUser>(SET_USER);
export const addNewUserApartment = createAction<number>(ADD_NEW_USER_APARTMENT);
export const removeUserApartment = createAction<number>(REMOVE_USER_APARTMENT);
