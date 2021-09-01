import { createAction } from '@reduxjs/toolkit';
import { CLEAR_TOAST, SET_USER_AUTHENTIFICATION, SHOW_TOAST } from './types/app.types';

export const setUserAuthentification = createAction<boolean>(
  SET_USER_AUTHENTIFICATION,
);
export const showToast = createAction<any>(SHOW_TOAST);
export const clearToast = createAction(CLEAR_TOAST);
