import { createAction } from '@reduxjs/toolkit';
import { IAppUser } from '../reducers/types';
import { SET_USER } from './types/user.types';

export const setUser = createAction<IAppUser>(SET_USER);
