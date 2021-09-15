import { createAction } from '@reduxjs/toolkit';
import { CLEAR_TOAST, SET_USER_AUTHENTICATION, SHOW_TOAST } from './types/app.types';

export const setUserAuthentication = createAction<boolean>(
  SET_USER_AUTHENTICATION,
);
export const showToast = createAction<string>(SHOW_TOAST);
export const clearToast = createAction(CLEAR_TOAST);
