import { createAction } from '@reduxjs/toolkit';
import { IApartment } from '../components/interfaces';
import {
  CLEAR_TOAST, SET_USER_AUTHENTIFICATION, SHOW_TOAST, SET_APARTMENTS
} from './types/app.types';

export const setUserAuthentification = createAction<boolean>(SET_USER_AUTHENTIFICATION);
export const showToast = createAction<{ toastMessage: string, toastType: string }>(SHOW_TOAST);
export const clearToast = createAction(CLEAR_TOAST);
export const setApartments = createAction<IApartment[]>(SET_APARTMENTS);
